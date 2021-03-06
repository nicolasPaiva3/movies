import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Filme from "./pages/Filme"
import Favoritos from "./pages/Favoritos";

import NotFound from "./components/NotFound";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home } />
        <Route exact path='/filme/:id' component={Filme}/>
        <Route exact path='/favoritos' component={Favoritos} />
        <Route path='*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
