import React,{PureComponent} from 'react';
import { Button } from 'antd';
import './Home.less';
import {listActions} from './HomeRedux.js';

import fetch from '../../fetch';
import connect from '../../redux/connect';

import {List} from 'components';


class Home extends PureComponent{

  componentDidMount(){
    fetch('/list',this.props.loadList); 
  }

  render(){
    return(
      <div className='home'>
        Home
        <List/>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default connect(Home,'hone',{...listActions});