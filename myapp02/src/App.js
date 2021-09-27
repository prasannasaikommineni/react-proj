import logo from './logo.svg';
import './App.css';
import FontSize from './components/font-size/font-size';
import GitHubUsersHook from './components/git-hub-user-hook/git-hub-user-hook';
import TwoWayBinding from './components/two-way-binding/two-way-binding';
import RestCountries from './components/rest-countries/rest-countries-async';
import MyCounting from './components/my-counting/my-counting';
import Outer02 from './components/Outer/outer';
import Routing from './components/routing'

function App() {
  return (
    <div className="App">
      <Routing/>
      <Outer02/>
      <MyCounting/>
      {/* <RestCountries/> */}
      {/* <TwoWayBinding/> */}
      {/* <GitHubUsersHook/> */}
         {/* <FontSize/> */}
    </div>
  );
}

export default App;
