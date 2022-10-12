import Hero from './components/Hero/Hero';
import Movies from './components/Movies';
import { MoviesData, MoviesDataTwo } from './components/Movies/Data';
import {GlobalStyled}from "./GlobalStyled";
import Feature from './components/Feature';
import {ActionPage} from './components/pages/Action';
import {ComedyPage} from './components/pages/Comedy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
        <GlobalStyled/>
        <Hero/>
         
          <Link to='/action'>
            ActionPage
          </Link>
          <Link to='/comedy'>
            ComedyPage
          </Link>

        <Movies heading="Categorys" data={MoviesData}/>
        <Feature/>
        <Movies heading="Best movies for the next year" data={MoviesDataTwo}/>
        <Switch>     

          <Route path='/action'>
            <ActionPage/>
          </Route> 
          <Route path='/comedy'>
            <ComedyPage/>
          </Route> 
        
        </Switch> 
    </Router>
    
  );
}

export default App;
