import { Box, Typography, Container } from "@mui/material";
import checkIcon from "../../assets/clinic/HeroSectionIcon/check 1.svg";

export default function OurAchievementSection() {
  const achievements = [
    {
      id: 1,
      title: "26+ Years of Excellence in Healthcare",
    },
    {
      id: 2,
      title: "Over 15,000 Successful Happy Patients",
    },
    {
      id: 3,
      title: "Expert Team of Medical Professionals",
    },
    {
      id: 4,
      title: "State-of-the-Art Medical Facilities",
    },
    {
      id: 5,
      title: "Internationally Recognized Certifications",
    },
    {
      id: 6,
      title: "98% Patient Satisfaction Rate",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "463px" },
        minHeight: { xs: "400px", md: "463px" },
        backgroundColor: "#F8FAFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 0 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: { xs: "100%", md: "1319px" },
          height: { xs: "auto", md: "348px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: "34px" },
          py: { xs: 3, md: "13px" },
          px: { xs: 2, md: 4 },
          marginTop: { xs: 0, md: "47px" },
          marginLeft: { xs: 0, md: "61px" },
          marginRight: { xs: 0, md: "61px" },
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "36px", md: "48px" },
              color: "#000000",
              lineHeight: "1.2",
            }}
          >
            Our Achievements
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "20px", sm: "18px", md: "20px" },
              color: "#000000",
              lineHeight: "1.5",
              maxWidth: "800px",
            }}
          >
            Milestones that reflect our commitment to excellence
          </Typography>
        </Box>

        {/* Achievements Grid */}
        <Box
          sx={{
            width: { xs: "100%", md: "1319px" },
            height: { xs: "auto", md: "175px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: { xs: 3, sm: 4, md: "40px" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {achievements.map((achievement) => (
            <Box
              key={achievement.id}
              sx={{
                width: { xs: "400px", sm: "100%", md: "400px" },
                height: { xs: "auto", md: "60px" },
                minHeight: "40px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
                borderRadius: "9px",
                border: "1px solid #155DFC",
                p: { xs: "8px 12px", md: "10px 16px" },
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  transform: "translateY(-2px)",
                  borderColor: "#155DFC",
                },
              }}
            >
              {/* Check Icon */}
              <Box
                component="img"
                src={checkIcon}
                alt="check"
                sx={{
                  width: "24px",
                  height: "24px",
                  minWidth: "24px",
                }}
              />

              {/* Achievement Text */}
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "#333333",
                  lineHeight: "1.4",
                  flex: 1,
                }}
              >
                {achievement.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
