import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstPage from "./Component/FirstPage/firstPage";
import SecondPage from "./Component/SecondPage/secondPage";
import Routes from "./Utlis/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={FirstPage} exact path={Routes.Landing} />
          <Route component={SecondPage} exact path={Routes.SecondPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
