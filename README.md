
1：数据请求
fetch( url, this.props.action, object );

一参：请求地址；二参redux更新数据事件或回调函数；三参：post请求：obj对象post的参数

作用：简化fetch请求格式；工作中多数请求数据后存储就结束了，如果需要进行其他操作在进行回调函数；



2：组件与redux的连接
connect( Home, 'home', {...listAction} );

connect( Home, ['home','nav'], {...listAction} );  ##多页面数据调用；

一参：组件名，二参：redux中store数据的二级数据名；三参是事件；

作用：简化数据调取，改为智能调用数据；store数据 一级为state 二级为各页面的名称 三级为智能组件（我称为私有组件，这类组件通常不会被其他页面复用）；传入二级名称会讲这数据下的所以三级数据调取出来；

##避免需要用到其他页面的数据；建议全局共用数据在开一个二级数据；



之后会更新组件调用会简化成：import { List， Buts, } from 'components';
后续.........