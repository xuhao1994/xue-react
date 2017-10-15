import 'whatwg-fetch';


export default function (url,action,date){

  let urls=`http://localhost:3003${url}`;
  
  if(date && typeof date === 'object'){
    fetch(urls, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(date)
    }).then(response => response.json())
    .then((json) => {
      action(json);
    })
  }else{
    fetch(urls)
    .then(response => response.json())
    .then((json) => {
      action(json); 
    })
  }

}