import React from 'react';
import Profile from './components/Profile';
import TimeSlot from './components/TimeSlot';
import Booking from './components/Booking';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route exact path='/TimeSlot' component={TimeSlot} />
        <Route exact path='/Booking' component={Booking} />
        <Redirect to='/' />
      </Switch>
    </>
  );
};

export default App;
