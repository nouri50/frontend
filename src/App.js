import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Si tu as une page d'accueil
import LandingPage from './pages/LandingPage'; // Importer la Landing Page
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TaskPage from './pages/TaskPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import UserManagementPage from './pages/UserManagementPage';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={LandingPage} /> {/* Landing Page comme page d'accueil */}
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/tasks" component={TaskPage} />
                <Route path="/change-password" component={ChangePasswordPage} />
                <Route path="/user-management" component={UserManagementPage} />
                <Route path="/home" component={HomePage} /> {/* Si tu veux garder la Home Page */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
