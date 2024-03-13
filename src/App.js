import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import { BoardPage } from "./components/Board/BoardPage";
import { CompetitionsPage } from "./components/Competitions/CompetitionsPage";
import { ContactPage } from "./components/Contact/ContactPage";
import { DonatePage } from "./components/Donate/DonatePage";
import { HomePage } from "./components/Home/HomePage";
import { JudgePage } from "./components/Judge/JudgePage";
import { MISTree } from "./components/MISTree/MISTree";
import { ProgramsPage } from "./components/Programs/ProgramsPage";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
import { RulebookPage } from "./components/Rulebook/RulebookPage";
import { SchedulePage } from "./components/Schedule/SchedulePage";
import { SponsorPage } from "./components/Sponsor/SponsorPage";
import { ThemePage } from "./components/Theme/ThemePage";
import { VolunteerPage } from "./components/Volunteer/VolunteerPage";
import { WinnersPage } from "./components/Winners/WinnersPage";
import { Y2023 } from "./components/Years/2023/Y2023";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    {/* About */}
    <Route path="/about" component={AboutPage} />
    <Route path="/board" component={BoardPage} />

    {/* SoCal MIST 2024 */}
    <Route path="/registration" component={RegistrationPage} />
    <Route path="/theme" component={ThemePage} />
    <Route path="/rulebook" component={RulebookPage} />
    <Route path="/competitions" component={CompetitionsPage} />
    <Route path="/programs" component={ProgramsPage} />

    {/* Get Involved */}
    <Route path="/judge" component={JudgePage} />
    <Route path="/volunteer" component={VolunteerPage} />

    {/* Years */}
    <Route path="/years/2023" component={Y2023} />

    {/* Sponsor/Donate */}
    <Route path="/sponsor" component={SponsorPage} />
    <Route path="/donate" component={DonatePage} />

    {/* Other */}
    <Route path="/schedule" component={SchedulePage} />
    <Route path="/winners" component={WinnersPage} />
    

    {/* 404 Page Redirects to Home */}
    <Redirect to="/" />
  </Switch>
);

export default App;
