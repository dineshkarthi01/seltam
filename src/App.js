import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './container/LoginPage';
import AdminDashboard from './container/AdminDashboard';
import CustomerDashboard from './container/CustomerDashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/customer" component={CustomerDashboard} />
            </Switch>
        </Router>
    );
}

export default App;