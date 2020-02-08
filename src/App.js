import React from 'react';
import { AdminPage } from './components/Admin/AdminPage';
import { HomePage } from './components/Home/HomePage';
import { ContactPage } from './components/Contact/ContactPage';
import { AboutPage } from './components/About/AboutPage';
import { SchedulePage } from './components/Schedule/SchedulePage';
import { ThemePage } from './components/Theme/ThemePage';
import { RegisterPage } from './components/Register/RegisterPage';
import { CompetitionPage } from './components/Competition/CompetitionPage';
import { SponsorPage } from './components/Sponsor/SponsorPage';
import { DonatePage } from './components/Donate/DonatePage';
import { BoardPage } from './components/Board/BoardPage';
import { AmbassadorsPage } from './components/Ambassadors/AmbassadorsPage';
import { JudgePage } from './components/Judge/JudgePage';
import { VolunteerPage } from './components/Volunteer/VolunteerPage';
import { EarlySubmissionsPage } from './components/EarlySubmissions/EarlySubmissionsPage'
import { RulebookPage } from './components/Rulebook/RulebookPage'
import { EighthGradeApp } from './components/EighthGradeApp/EighthGradeApp'
import { FinancialAidPage } from './components/FinancialAidPage/FinancialAidPage'
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/" component={ HomePage } />
    <Route path="/admin" component={ AdminPage } />
    <Route path="/about" component={ AboutPage } />
    <Route path="/board" component={ BoardPage } />
    <Route path="/theme" component={ ThemePage } />
    <Route path="/schedule" component={ SchedulePage } />
    <Route path="/judge" component={ JudgePage } />
    <Route path="/volunteer" component={ VolunteerPage } />
    <Route path="/ambassadors" component={ AmbassadorsPage } />
    <Route path="/contact" component={ ContactPage } />
    <Route path="/register" component={ RegisterPage } />
    <Route path="/competition" component={ CompetitionPage } />
    <Route path="/sponsor" component={ SponsorPage } />
    <Route path="/donate" component={ DonatePage } />
    <Route path="/earlySubmissions" component={ EarlySubmissionsPage } />
    <Route path="/rulebook" component={ RulebookPage } />
    <Route path="/8th-grade" component={ EighthGradeApp } />
    <Route path="/financial-aid" component={ FinancialAidPage } />

    <Redirect to="/" />
  </Switch>
);

export default App;