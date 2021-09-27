

import React , {Component, createRef } from 'react';

class  MyTextBox extends Component{
    constructor(){
        super();
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
        this.myTextInput = createRef() ;
    }

    handleClick() {
        this.myTextInput.current.focus(); 
        console.log('data: ', this.myTextInput.current.value );
     }

    render() {
        return (
            <div>
                <input type="date" ref={this.myTextInput} /> <br/><br/>
                <input type="button" value="Bring back focus" 
                       className='btn btn-warning'
                       onClick={this.handleClick} />
            </div>
        );
    }
}
export default MyTextBox ;