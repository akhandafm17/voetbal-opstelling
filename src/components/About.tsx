import { Card, CardMedia, CardContent, Typography, Box, Theme } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AboutImage from "../assets/img/ajax.svg";

const useStyles = makeStyles((theme:Theme) => ({
  imgabout: {
    color: "black",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto"
    },
    [theme.breakpoints.between("sm", "md")]: {
     
      width: "100%",
      height: "auto"

    },
    "@media (min-width: 1280px)": {
      width: "auto",
              height: "500px",
              paddingLeft: "50px"
    }

  }
}));
function About(){
  const classes = useStyles();
 
    return(
    
       <Card style={{ borderRadius: "20px", backgroundColor: "#4ACA9D" }} sx={{ paddingLeft:"20px",paddingRight:"20px",maxWidth: 600, mx: 'auto', mt: '2rem' }}>
          <CardMedia
            className={classes.imgabout}
            component="img"
            image={AboutImage}
            alt="about" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Examenproject
            </Typography>
            <Typography variant="body2" color="text.secondary">
              React examenproject made by Marwan Akhandaf used in web technology courses at Karel de Grote Hogeschool
            </Typography>
          </CardContent>
        </Card>
    );
}
export default About;