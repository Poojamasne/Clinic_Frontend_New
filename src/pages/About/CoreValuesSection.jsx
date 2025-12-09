import { Box, Container, Typography, Grid } from "@mui/material";

import compassionateCareIcon from "../../assets/clinic/ValueIcons/compassionate-care.svg";
import excellenceIcon from "../../assets/clinic/ValueIcons/excellence.svg";
import patientCenteredIcon from "../../assets/clinic/ValueIcons/patient-centered.svg";
import innovationIcon from "../../assets/clinic/ValueIcons/innovation.svg";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and understanding.",
      icon: compassionateCareIcon,
      iconAlt: "Compassionate Care Icon"
    },
    {
      title: "Excellence",
      description: "Committed to the highest standards of medical care and service.",
      icon: excellenceIcon,
      iconAlt: "Excellence Icon"
    },
    {
      title: "Patient-Centered",
      description: "Your health and comfort are at the heart of everything we do.",
      icon: patientCenteredIcon,
      iconAlt: "Patient-Centered Icon"
    },
    {
      title: "Innovation",
      description: "Utilizing the latest medical technologies and treatment methods.",
      icon: innovationIcon,
      iconAlt: "Innovation Icon"
    }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "504px",
        backgroundColor: "#ffffff",
        py: { xs: 6, sm: 8, md: 10 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6 }
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6, lg: 8 },
            mx: "auto",
            maxWidth: { xs: "100%", sm: "800px", lg: "900px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: { 
                xs: "28px",
                sm: "32px",
                md: "36px",
                lg: "40px"
              },
              lineHeight: { xs: 1.2, sm: 1.1 },
              color: "#000000",
              mb: { xs: 2, sm: 3 },
            }}
          >
            Our Core Values
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: { 
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "22px"
              },
              lineHeight: { xs: 1.3, sm: 1.2 },
              color: "#000000",
              opacity: 0.8,
            }}
          >
            The principles that guide our every decision and action
          </Typography>
        </Box>

        {/* Values Grid - Matching the frame layout dimensions */}
        <Box
          sx={{
            maxWidth: "1284px",
            minHeight: "388px",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Grid 
            container 
            spacing={{ xs: 4, md: 8, lg: 6.2 }} // 62px gap for desktop
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {values.map((value, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    width: { xs: "80px", sm: "90px", md: "100px", lg: "120px" },
                    height: { xs: "80px", sm: "90px", md: "100px", lg: "120px" },
                    mb: { xs: 3, sm: 4, md: 5 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={value.icon}
                    alt={value.iconAlt}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: { 
                      xs: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "24px"
                    },
                    lineHeight: 1.2,
                    color: "#155DFC",
                    mb: { xs: 1.5, sm: 2 },
                  }}
                >
                  {value.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { 
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
                      lg: "17px"
                    },
                    lineHeight: { xs: 1.5, sm: 1.6 },
                    color: "#666",
                    maxWidth: "280px",
                    mx: "auto",
                  }}
                >
                  {value.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}