import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function DoctorCard({ name, specialty, image, qualification, description }) {
  return (
    <Card
      sx={{
        width: { xs: 270, sm: 280, md: 300, lg: 360, xl: 380 },
        height: { xs: 380, sm: 420, md: 450, lg: 480 },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 24px rgba(96, 183, 255, 0.12)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: "100%",
          height: { xs: 230, sm: 240, md: 260, lg: 280 },
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          textAlign: "center", // ensures all child text is centered
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            color: "#1a1a1a",
            mb: 1,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#155DFC",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 400,
            mb: 1,
          }}
        >
          {specialty}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "0.85rem",
            color: "#333",
            fontWeight: 500,
            mb: 0.6,
          }}
        >
          {qualification}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "0.8rem",
            color: "#666",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
