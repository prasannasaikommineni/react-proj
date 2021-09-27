import React, { Component } from 'react';
import MyDiv from '../my-div/my-div';
import MyTextBox from '../text-box/text-box';

class MyProps extends Component {
            render() {
                return <div>JS is {this.props.name} ,{this.props.add}
                <MyDiv name='Prasanna'/>
                <MyTextBox/>
                </div>;
            }
        }

 export default MyProps ;

   /* <MyProps name="the best" /> */