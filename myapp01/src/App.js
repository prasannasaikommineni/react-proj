import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react' ;
import Myclass from './components/myclass/myclass';
import CommentBox from './components/comment-box/comment-box';
import MyMessageHoc from './components/my-func/my-func';
import TwoWayBinding from './components/two-way-binding/two-way-binding'
import Galaxy from './components/galaxy/galaxy';
import MyContainerToggle from './components/my-container-toggle/my-container-toggle';
import MyContainerComm from './components/my-container-task/my-container-task';
import BtnHook from './components/button-hook/button-hook';

function App() {
  return (

    <div className="App">
        <BtnHook/>
      <MyContainerComm/>
      <ul id="mb1" tabIndex="-1">
  <li id="mb1_menu1" tabIndex="-1"> Font
    <ul id="fontMenu" title="Font">
      <li id="sans-serif" tabIndex="0">Sans-serif</li>
      <li id="serif" tabIndex="0">Serif</li>
      <li id="monospace" tabIndex="0">Monospace</li>
      <li id="fantasy" tabIndex="0">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabIndex="-1"> Style
    <ul id="styleMenu" title="Style" tabIndex="-1">
      <li id="italic" tabIndex="-1">Italics</li>
      <li id="bold" tabIndex="-1">Bold</li>
      <li id="underline" tabIndex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabIndex="-1"> Justification
    <ul id="justificationMenu" title="Justification" tabIndex="-1">
      <li id="left" tabIndex="-1">Left</li>
      <li id="center" tabIndex="-1">Centered</li>
      <li id="right" tabIndex="-1">Right</li>
      <li id="justify" tabIndex="-1">Justify</li>
    </ul>
  </li>
</ul>
      <BtnHook/>
      <MyContainerComm/>
      <MyContainerToggle/>
      {/* <Galaxy/> */}
      <TwoWayBinding/>
      <MyMessageHoc name='func'/>
<Myclass/>
<CommentBox/>

    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MyMessageHoc name='func'/>
// <Myclass/>
// <CommentBox/>

//       </div>
//     );
//   }
// }

export default App;
