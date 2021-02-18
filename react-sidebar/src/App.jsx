import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/reports" exact component={Reports}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
