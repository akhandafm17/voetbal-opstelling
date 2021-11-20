import './App.css';
import axios from 'axios';
import useGetCollection from './hooks/useGetCollection';
import {CircularProgress } from "@mui/material";
import  Navigation  from "./components/Navigation";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About"
import OpOverzicht from './components/opOverzicht';
import Opstelling from './components/Opstelling';
import Oops from './components/oops';
import PlayerDetail from './components/PlayerDetail';
import Formulier from './components/Formulier';
import MyAppBar from './components/MyAppBar';

axios.defaults.baseURL = "http://localhost:3001";
//json-server --watch data/data.json --port 3001


function App() {
  const { loading, error} = useGetCollection('/opOverzicht');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

 if (loading) return   (
  <CircularProgress sx={{ display: "block", mt: "10em", mx: "auto" }} />
);
 if (error) return <Oops/>

  return (
    <Router>
      <div className="App">
      <MyAppBar onOpenDrawer={handleDrawerToggle}/>
      <Navigation isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Switch>
         <Route path="/opItems/:id">
          <Opstelling />
         </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/players/:id">
            <PlayerDetail />
          </Route>
          <Route path="/form">
            <Formulier/>
          </Route>
          <Route path="/">
            <OpOverzicht/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
