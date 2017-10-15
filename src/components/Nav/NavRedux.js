const initiaState={
  mos:'',
}


const LOAD_NAV='LOAD_NAV';


export function loadNav(date){
  return{
    type:LOAD_NAV,
    date,
  }
}


export default function(state = initiaState, action){
  switch(action.type){
    case LOAD_NAV:{
      return Object.assign({}, state, action.date);
    }

    default:
      return state;
  }
}