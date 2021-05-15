import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Some from "./components/Some/Some";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./fade.css";

const AnimatedRoutes = (props) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fadeTranslate"
        timeout={600}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Switch location={location}>
          <Route exact path="/" component={Some} />
          <Route exact path="/main" component={Layout} />
        </Switch>
      </CSSTransition>
      
    </TransitionGroup>
  );
};


function App(props) {
  let location = props.location;
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={AnimatedRoutes} />
      </BrowserRouter>
    </div>
  );
}

const BasicExample = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);
export default BasicExample;
