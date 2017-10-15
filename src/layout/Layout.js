import React,{ PureComponent } from 'react';
import './Layout.css';

export default class Layout extends PureComponent{
  render(){
    return(
      <div className='layout'>
        {this.props.children}
      </div>
    );
  }
}