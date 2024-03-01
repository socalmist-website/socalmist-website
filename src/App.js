import React from "react";
import { HomePage } from "./components/Home/HomePage";
import { ContactPage } from "./components/Contact/ContactPage";
import { AboutPage } from "./components/About/AboutPage";
import { SchedulePage } from "./components/Schedule/SchedulePage";
import { ThemePage } from "./components/Theme/ThemePage";
import { SpiritPage } from "./components/Spirit/SpiritPage";
import { MISTree } from "./components/MISTree/MISTree";
import { SponsorPage } from "./components/Sponsor/SponsorPage";
import { DonatePage } from "./components/Donate/DonatePage";
import { WinnersPage } from "./components/Winners/WinnersPage";
import { JudgePage } from "./components/Judge/JudgePage";
import { VolunteerPage } from "./components/Volunteer/VolunteerPage";
import { RulebookPage } from "./components/Rulebook/RulebookPage";
import { CompetitionsPage } from "./components/Competitions/CompetitionsPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
import { ProgramsPage } from "./components/Programs/ProgramsPage";


const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    {/* SoCal MIST 2024 */}
    <Route path="/registration" component={RegistrationPage} />
    <Route path="/theme" component={ThemePage} />
    <Route path="/rulebook" component={RulebookPage} />
    <Route path="/competitions" component={CompetitionsPage} />
    <Route path="/programs" component={ProgramsPage} />

    {/* About */}
    <Route path="/about" component={AboutPage} />
    
    {/* Program */}
    <Route path="/spirit" component={SpiritPage} />

    {/* Get Involved */}
    <Route path="/judge" component={JudgePage} />
    <Route path="/volunteer" component={VolunteerPage} />

    {/* Contact */}
    <Route path="/contact" component={ContactPage} />

    {/* Sponsor/Donate */}
    <Route path="/sponsor" component={SponsorPage} />
    <Route path="/donate" component={DonatePage} />
  

    {/* Other */}
    <Route path="/MISTree" component={MISTree} />
    <Route path="/schedule" component={SchedulePage} />
    <Route path="/winners" component={WinnersPage} />
    
    
    {/* 404 Page Redirects to Home */}
    <Redirect to="/" />
  </Switch>
);

export default App;
