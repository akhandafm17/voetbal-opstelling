import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function Formulier() {
  const [titel, setTitle] = useState("");
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg"
  );
  const options = {
    type: toast.TYPE.SUCCESS,
  };

  const history = useHistory();
  const allowed = ["image/png", "image", "image/jpeg", "image/svg"];

  function handleVerder() {
    if (titel.trim() === "" || image.trim() === "") {
      console.log("invalid: ");
      toast.dark("titel of image niet ingevuld", options);
    } else {
      axios
        .get<any>(image)
        .then((resp) => {
          if (!allowed.includes(resp.headers["content-type"])) {
            toast.dark("de image is niet valid", options);
          } else {
            const nieuwOpstelling = {
              opOverzicht: 1,
              name: titel,
              image: image,
              likes: 0,
              share: "Kat",
              liked: false,
              players: [],
            };
            axios
              .get<any>("/players")
              .then((resp) => {
                nieuwOpstelling.players = resp.data;
                console.log(nieuwOpstelling);
                axios
                  .post("/opItems", nieuwOpstelling)
                  .then((resp: any) =>
                    history.push(`/opItems/${resp.data.id}`)
                  );
              })
              .catch((err) => console.log(err));
          }
        })
        .catch(() => toast.dark("de image is niet valid", options));
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "937px", backgroundColor: "#F1EFE3" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F1EFE3",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottomRightRadius: "50px",
            borderTopRightRadius: "50px",
          }}
        />
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "#F1EFE3", boxShadow: "none" }}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Maak nieuwe opstelling aan.
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Titel"
                name="title"
                autoComplete="title"
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="imagurl"
                label="ImagURL"
                type="text"
                id="imagurl"
                style={{ borderRadius: "20px" }}
                autoComplete="imageURL"
                onChange={(e) => setImage(e.target.value)}
                defaultValue=""
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  backgroundColor: "#F77C64",
                  borderRadius: "20px",
                  color: "#000000",
                  fontSize: 13,
                  textTransform: "inherit",
                }}
                onClick={handleVerder}
              >
                Ga Verder
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        className="toast"
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}
