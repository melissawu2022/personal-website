import "./App.css";
//import { Link, animateScroll as scroll } from "react-scroll";
import NavbarComponent from "./components/NavbarComponent";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import SideProjects from "./components/SideProjects";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Education" component={Education} />
        <Route path="/WorkExperience" component={WorkExperience} />
        <Route path="/SideProjects" component={SideProjects} />
      </Switch>
    </div>
  );
}

export default App;
