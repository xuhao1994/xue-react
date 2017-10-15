import React,{PureComponent} from 'react';
import { Button } from 'antd';
import './Home.less';
import * as listAction from '../../components/List/ListRedux';

import fetch from '../../fetch';
import connect from '../../redux/connect';


class Home extends PureComponent{

  componentDidMount(){
    fetch('/list',this.props.loadList); 
  }

  render(){
    return(
      <div className='home'>
        Home
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default connect(Home,'hone',{...listAction});