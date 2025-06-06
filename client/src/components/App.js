import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>landing</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
          <Route exact path="/Surveys/New" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
