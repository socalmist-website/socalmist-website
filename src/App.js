import React from "react";
import { HomePage } from "./components/Home/HomePage";
import { ContactPage } from "./components/Contact/ContactPage";
import { AboutPage } from "./components/About/AboutPage";
import { SchedulePage } from "./components/Schedule/SchedulePage";
import { ThemePage } from "./components/Theme/ThemePage";
import { SpiritPage } from "./components/Spirit/SpiritPage";
import { MISTree } from "./components/MISTree/MISTree";
import { RegisterPage } from "./components/Register/RegisterPage";
import { CompetitionPage } from "./components/Competition/CompetitionPage";
import { SponsorPage } from "./components/Sponsor/SponsorPage";
import { DonatePage } from "./components/Donate/DonatePage";
import { WinnersPage } from "./components/Winners/WinnersPage";
// import { BoardApplicationPage } from "./components/BoardApplication/BoardApplicationPage";
import { JudgePage } from "./components/Judge/JudgePage";
import { VolunteerPage } from "./components/Volunteer/VolunteerPage";
// import { EarlySubmissionsPage } from "./components/EarlySubmissions/EarlySubmissionsPage";
import { RulebookPage } from "./components/Rulebook/RulebookPage";
// import { EighthGradeApp } from "./components/EighthGradeApp/EighthGradeApp";
// import { WinnersPage } from "./components/Winners/WinnersPage";
// import { FinancialAidPage } from './components/FinancialAidPage/FinancialAidPage'
// import { StatusPage } from './components/Status/StatusPage'
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    {/* <Route path="/admin" component={ AdminPage } /> */}
    <Route path="/about" component={AboutPage} />
    {/* <Route path="/board" component={BoardPage} /> */}
    <Route path="/theme" component={ThemePage} />
    <Route path="/spirit" component={SpiritPage} />
    <Route path="/MISTree" component={MISTree} />
    <Route path="/schedule" component={SchedulePage} />
    <Route path="/judge" component={JudgePage} />
    <Route path="/volunteer" component={VolunteerPage} />
    {/* <Route path="/boardApplication" component={BoardApplicationPage} /> */}
    <Route path="/contact" component={ContactPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/competition" component={CompetitionPage} />
    <Route path="/sponsor" component={SponsorPage} />
    <Route path="/donate" component={DonatePage} />
    {/* <Route path="/earlySubmissions" component={EarlySubmissionsPage} /> */}
    <Route path="/rulebookSupplement" component={RulebookPage} />
    {/* <Route path="/8th-grade" component={EighthGradeApp} /> */}
    {/* <Route path="/financial-aid" component={ FinancialAidPage } />
    <Route path="/status" component={ StatusPage } /> */}
    <Route path="/winners" component={WinnersPage} />

    <Redirect to="/" />
  </Switch>
);

export default App;
