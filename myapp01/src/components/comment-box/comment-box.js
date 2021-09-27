import $ from 'jquery';
import React, { Component } from 'react';
import MyButton from '../my-button/my-button';
import Mymap from '../my-map/my-map';
import RepoList from '../repo-list/repo-list'

class  CommentBox extends Component{
    render(){
        let  status = "empty" ;
      return (
        <div className="myBox">
          This is an  info Box, which is currently {status}.
          <MyButton/>
          <Mymap/>
          <RepoList prm={fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')} />
        </div>
      );
    }  // eo render()
  }
  
  export default CommentBox ;