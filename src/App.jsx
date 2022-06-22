import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//component Navbar
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/"></Route>
          <Route path="/signup"></Route>
          <Route path="/login"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
