 import Navbar from "./components/Navbar.component";
 import {Switch , Route} from 'react-router-dom';
import Homepage from "./components/Home.component.jsx";
import Create from "./components/Create.component";
import BlogDetail from "./components/BlogDetail.component";
import NotFound from "./components/NotFound.component";


function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <div className="content">
        <Switch>
          <Route exact path = '/' >
            <Homepage></Homepage>
          </Route>
          <Route path = '/create'>
            <Create></Create>
          </Route>
          <Route path = '/blogs/:id'>
            <BlogDetail></BlogDetail>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
