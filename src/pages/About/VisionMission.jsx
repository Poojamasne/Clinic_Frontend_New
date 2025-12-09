// VisionMission.js
import { Box, Typography, Container } from "@mui/material";
import boySvg from "../../assets/vision-mission/boy.svg";
import girlSvg from "../../assets/vision-mission/girl.svg";

export default function VisionMission() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Box
        sx={{
          width: "940px",
          background: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.10)",
          padding: "50px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BOY SVG - LEFT */}
<Box
  sx={{
    display: { xs: "none", lg: "flex" },
    position: "absolute",
    left: "50px",
    top: "25%",               // 🔥 adjust vertical position
    transform: "translateY(-50%)",
    width: "230px",
    height: "200px",
    zIndex: 0,
  }}
>
  <img src={boySvg} style={{ width: "100%" }} alt="boy" />
</Box>


        {/* MISSION SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "left", lg: "left" },
            textAlign: { xs: "center", lg: "left" },
            maxWidth: "620px",
            ml: { lg: "auto" },
            pr: { lg: "40px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "32px",
              color: "#155DFC",
            }}
          >
            Our Mission
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "#666",
              mt: 2,
              lineHeight: "150%",
            }}
          >
            To provide exceptional, patient-centered healthcare services by combining
            medical expertise with compassionate care. We strive to improve the quality
            of life for every individual through innovative treatments and personalized
            care plans.
          </Typography>
        </Box>

        {/* LINE DIVIDER */}
        <Box
          sx={{
            width: "100%",
            borderTop: "7px solid #D8E4FF",
            opacity: 1,
            my: 5,
          }}
        />

        {/* GIRL SVG - RIGHT */} 
<Box
  sx={{
    display: { xs: "none", lg: "flex" },
    position: "absolute",
    right: "50px",
    bottom: "25%",           
    transform: "translateY(50%)",
    width: "230px",
    height: "200px",
    zIndex: 0,
  }}
>
  <img src={girlSvg} style={{ width: "100%" }} alt="girl" />
</Box>


        {/* VISION SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
            maxWidth: "620px",
            pl: { lg: "40px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "32px",
              color: "#155DFC",
              mb: 2,
            }}
          >
            Our Vision
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "#666",
              lineHeight: "150%",
            }}
          >
            To be the leading healthcare provider recognized for excellence in patient
            care, innovation, and community well-being. We envision a future where every
            person has access to compassionate and transformative healthcare.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
