import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import TagEdit from 'views/TagEdit';
import Tags from 'views/Tags';

const AppWrapper = styled.div`
color: #333;
max-width: 500px;
margin: auto;
border: 1px dashed;
box-sizing: border-box;
`
function App() {
  return (
    <AppWrapper>
          <Router>
       <Switch>
      <Route path='/tags/:id'>
        <TagEdit></TagEdit>
      </Route>
      <Route path='/tags'>
        <Tags/>
      </Route>
      <Route path='/money'>
        <Money/>
      </Route>
      <Route path='/statistics'>
      <Statistics/>
      </Route>
      <Redirect from='/' to='/money'></Redirect>
      <Route path='*'>
        <NoMatch/> 
      </Route>
      </Switch>
    </Router>
    </AppWrapper>
  );
}

export default App;
