import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Components/Shared/Header";
import Flight from "./Components/Views/Flight";
import Hotel from "./Components/Views/Hotel";
import Holiday from "./Components/Views/Holiday";
function App() {
  return (

    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Flight />
            </Route>
            <Route exact path="/" >
              <Hotel />
            </Route>
            <Route exact path="/" >
              <Holiday />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
