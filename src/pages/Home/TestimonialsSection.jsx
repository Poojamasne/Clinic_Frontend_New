import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from "../../api/testimonials.api";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const isScrollingRef = useRef(true);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await getTestimonials();
        
        console.log("Testimonials API Response:", response); // Debug log
        
        // Check response structure - backend returns { success: true, data: { testimonials: [...] } }
        if (response && response.success && response.data) {
          const testimonialsData = response.data.testimonials || response.data;
          
          if (Array.isArray(testimonialsData) && testimonialsData.length > 0) {
            // Map backend data to frontend format
            const mappedTestimonials = testimonialsData.map((item) => ({
              name: `${item.first_name || ""} ${item.last_name || ""}`.trim(),
              quote: item.feedback || "",
              image: item.image_url || null,
            }));
            
            console.log("Mapped testimonials:", mappedTestimonials); // Debug log
            setTestimonials(mappedTestimonials);
          } else {
            console.log("No testimonials in response or empty array");
            setTestimonials([]);
          }
        } else {
          console.log("Invalid response structure:", response);
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        console.error("Error details:", error.response?.data || error.message);
        // Keep empty array on error - component will handle gracefully
        setTestimonials([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Duplicate testimonials for seamless infinite scroll (only if we have testimonials)
  const duplicatedTestimonials = testimonials.length > 0 
    ? [...testimonials, ...testimonials] 
    : [];

  // Auto-scroll effect - only start when testimonials are loaded
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || duplicatedTestimonials.length === 0) return;

    const scroll = () => {
      if (!isScrollingRef.current) return;

      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;

      if (currentScroll >= maxScroll - 1) {
        // Reset to start when reaching the end (seamless loop)
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollContainer.scrollBy({ left: 0.5, behavior: "auto" });
      }
    };

    // Start auto-scroll
    scrollIntervalRef.current = setInterval(scroll, 30); // Scroll every 30ms for smooth movement

    // Pause on hover
    const handleMouseEnter = () => {
      isScrollingRef.current = false;
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      isScrollingRef.current = true;
      scrollIntervalRef.current = setInterval(scroll, 30);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [duplicatedTestimonials.length]);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6, lg: 8 },
        backgroundColor: "#F4F9FF",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          px: "32px", // 👈 reduce from 32 → 24 (or 28)
          mx: "auto",
        }}
      >
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: 1376,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "22px",
                sm: "22px",
                md: "24px",
                lg: "24px",
              },
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            What Our Patients Say
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "16px" },
              color: "#000000",
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 300,
            }}
          >
            Real stories from real patients who experienced exceptional care.
          </Typography>
        </Box>

        {/* Testimonial Cards Auto-Scroll Container */}
        {isLoading ? (
          <Box
            sx={{
              textAlign: "center",
              py: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#666",
              }}
            >
              Loading testimonials...
            </Typography>
          </Box>
        ) : testimonials.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#666",
              }}
            >
              No testimonials available at the moment.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#999",
                fontSize: "12px",
                mt: 1,
              }}
            >
              Check browser console for API errors
            </Typography>
          </Box>
        ) : (
          <Box
            ref={scrollContainerRef}
            sx={{
              maxWidth: "1346px", // 👈 bound to 1376px
              margin: "auto",
              display: "flex",
              gap: { xs: 4, sm: 5, md: 6, lg: 11 },
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge
              },
              pb: 2,
              cursor: "grab",
              "&:active": {
                cursor: "grabbing",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Box
                key={`${testimonial.name}-${index}`}
                sx={{
                  flexShrink: 0,
                  display: "flex",
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
