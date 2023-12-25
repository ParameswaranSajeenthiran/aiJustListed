import slide from "../../../assets/home/slideimg.png";
import { Grid, Typography, Button, Paper, Container } from "@mui/material";
import video from "../../../assets/home/Video.png";

// style for backgronnd image
const styles = {
  paperContainer: {
    backgroundImage: `url(${slide})`,
    backgroundSize: "cover",
    width: "100%",
  },
};

const Slide = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        style={styles.paperContainer}
        sx={{
          mt: 9,
          mb: { xs: 0, lg: 50 },
          height: { lg: "700px", xs: "500px" },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "60px" },
              fontWeight: "700",
              color: "#EE4335",
            }}
          >
            Revolutionize Your Real Estate Listings with JustListed AI
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "60px" },
              fontWeight: "700",
              color: "#072B4F",
            }}
          >
            Where Innovation Meets Efficiency{" "}
          </Typography>
        </Container>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "#072B4F", fontSize: { xs: "8px", lg: "16px" } }}
          >
           Craft Compelling Listings in Seconds, Not Hours
          </Typography>
        </Container>
        <Grid container item justifyContent={"center"} mt={3} spacing={2}>
          <Grid lg={2} item>
            <Button
              sx={{
                background: "linear-gradient(90deg, #EE4335 0%, #F9AA41 100%)",
                color: "white",
                padding: "10px",
              }}
            >
              Get Started for Free
            </Button>
          </Grid>
          <Grid lg={2} item>
            <Button
              sx={{
                border: "solid 1px black ",
                color: "black",
                padding: "10px",
              }}
            >
              How it works
            </Button>
          </Grid>
        </Grid>
        <Grid item container justifyContent={"center"} mt={5}>
          <img src={video} style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Slide;
