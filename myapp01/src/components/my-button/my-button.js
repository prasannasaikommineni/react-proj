
import React, { Component } from 'react';

class  MyButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
        props = {};
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }
    render() {
        let  text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div>
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
            <p> This is another line.  </p>
            </div>

        );
    }
}

export default MyButton ;