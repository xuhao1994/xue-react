

const initialState = {
  tags: [],
  url: '',
}

const LOAD_LIST = 'LOAD_LIST';



export function loadList(date) {
  return {
    type: LOAD_LIST,
    date,
  }
}



export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_LIST: {
      return Object.assign({}, state, action.date);
    }

    default:
      return state;
  }
}