import {connect} from 'react-redux';
export default function(name,names,actions){
  return connect(state => {
    let jsonState={};

    if( names && typeof names === 'string' ){
      for(let key in state[names]){
        jsonState[`${names}-${key}`]=state[names][key];
      }
    }else if( names && typeof names === 'object' ){
      
      for( let i = 0; i<names.length; i++ ){
        for(let key in state[names[i]]){
          jsonState[`${names[i]}-${key}`]=state[names[i]][key];
        }
      }

    }
    return jsonState;
  }, actions)(name)
}