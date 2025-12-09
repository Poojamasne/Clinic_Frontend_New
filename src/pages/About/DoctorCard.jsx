import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function DoctorCard({ name, specialty, image, qualification, description }) {
  return (
    <Card
      sx={{
        width: { 
          xs: "100%",        // Mobile: full width with max constraint
          sm: "280px",       // Small tablet: fixed width
          md: "300px",       // Tablet: fixed width  
          lg: "360px",       // Desktop: your original size
          xl: "380px"        // Large desktop: your original size
        },
        maxWidth: { xs: "280px", sm: "none" }, // Limit mobile width
        height: { 
          xs: "auto",        // Mobile: auto height
          sm: "420px",       // Small tablet: fixed
          md: "450px",       // Tablet: fixed
          lg: "480px"        // Desktop: your original height
        },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: { xs: "10px", sm: "12px" },
        backgroundColor: "#fff",
        boxShadow: { 
          xs: "0 2px 8px rgba(0,0,0,0.06)", 
          sm: "0 4px 12px rgba(0,0,0,0.08)" 
        },
        transition: "0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: { 
            xs: "translateY(-4px)", 
            sm: "translateY(-6px)", 
            md: "translateY(-8px)" 
          },
          boxShadow: { 
            xs: "0 4px 16px rgba(96, 183, 255, 0.1)",
            sm: "0 6px 20px rgba(96, 183, 255, 0.12)",
            md: "0 8px 24px rgba(96, 183, 255, 0.12)" 
          },
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: "100%",
          height: { 
            xs: "200px", 
            sm: "240px", 
            md: "260px", 
            lg: "280px" 
          },
          objectFit: "cover",
          borderTopLeftRadius: { xs: "10px", sm: "12px" },
          borderTopRightRadius: { xs: "10px", sm: "12px" },
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: { 
            xs: "16px 12px", 
            sm: "16px", 
            md: "20px", 
            lg: "24px" 
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: { 
              xs: "1rem",      // Mobile: 16px
              sm: "1.1rem",    // Small tablet: 17.6px
              md: "1.2rem",    // Tablet: 19.2px
              lg: "1.3rem"     // Desktop: 20.8px (your original)
            },
            color: "#1a1a1a",
            mb: { xs: 0.5, sm: 1 },
            lineHeight: { xs: 1.3, sm: 1.2 },
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#155DFC",
            fontSize: { 
              xs: "0.85rem",   // Mobile: 13.6px
              sm: "0.9rem",    // Small tablet: 14.4px
              md: "0.95rem",   // Tablet: 15.2px
              lg: "1rem"       // Desktop: 16px (your original)
            },
            fontWeight: { xs: 400, sm: 400 },
            mb: { xs: 0.75, sm: 1 },
            lineHeight: 1.2,
          }}
        >
          {specialty}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { 
              xs: "0.8rem",    // Mobile: 12.8px
              sm: "0.82rem",   // Small tablet: 13.12px
              md: "0.85rem",   // Tablet: 13.6px
              lg: "0.85rem"    // Desktop: 13.6px (your original)
            },
            color: "#333",
            fontWeight: 500,
            mb: { xs: 0.5, sm: 0.6 },
            lineHeight: { xs: 1.4, sm: 1.3 },
            px: { xs: 0.5, sm: 0 },
          }}
        >
          {qualification}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { 
              xs: "0.75rem",   // Mobile: 12px
              sm: "0.78rem",   // Small tablet: 12.48px
              md: "0.8rem",    // Tablet: 12.8px
              lg: "0.8rem"     // Desktop: 12.8px (your original)
            },
            color: "#666",
            lineHeight: { xs: 1.5, sm: 1.4 },
            opacity: 0.9,
            px: { xs: 0.5, sm: 0 },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}