import { AppBar, Toolbar, IconButton, Typography, Button, Box, createTheme, Theme } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { color } from "@mui/system";

type HeaderProps = {
    onOpenDrawer: () => void;

  };

  const useStyles = makeStyles((theme:Theme) => ({
    button: {
      color: "black",
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
      [theme.breakpoints.between("sm", "md")]: {
        backgroundColor: "#F77C64", 
        color:"#000000", 
        fontSize:13,
        fontWeight: 550, 
        textTransform:"inherit",
        borderRadius: "20px", 
        height:"30px", 
        width:"150px"
      },
      "@media (min-width: 1280px)": {
        backgroundColor: "#F77C64", 
        color:"#000000", 
        fontSize:13,
        fontWeight: 550, 
        textTransform:"inherit",
        borderRadius: "20px", 
        height:"30px", 
        width:"150px"
      }

    },
    iconbutton:{
      color: "black",
      [theme.breakpoints.down("xs")]: {
       display: "block",
       color: "#F77C64"
      },
      [theme.breakpoints.between("sm", "md")]: {
        display:"none"
      },
      "@media (min-width: 1280px)": {
        display:"none"
      }
    }
  }));
function MyAppBar({ onOpenDrawer }: HeaderProps){
    const history = useHistory();
    const classes = useStyles();

    return(
        <Box sx={{ flexGrow: 1, boxShadow: 3 }}>
  <AppBar  style={{ backgroundColor: "#4ACA9D" }}  position="static" color="transparent">
    <Toolbar sx={{ justifyContent: "flex-start" }}>
      <IconButton  
        onClick={onOpenDrawer}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Ajax
      </Typography>
      <Button className={classes.button}  onClick={() => history.push(`/form`)} variant="contained">Add Opstelling</Button>
      <IconButton className={classes.iconbutton} onClick={() => history.push(`/form`)} size="large">
                 <AddCircleIcon  fontSize="large"/>
      </IconButton>
    </Toolbar>
  </AppBar>
</Box>
    );
}
export default MyAppBar;