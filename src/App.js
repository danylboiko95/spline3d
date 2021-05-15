import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <iframe
        src="https://my.spline.design/libraryfloppy-f6a3a9eae4207ff6aa8f8c41e15c4c68/"
        frameBorder="0"
      ></iframe>

      <BrowserRouter>
        <Switch>
          <Route exact path={`/main`} component={Layout} />
        </Switch>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
