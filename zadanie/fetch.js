fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    userName.onclick=()=>{
        data.forEach((elem)=>{
            p1.insertAdjacentHTML('beforeend', `<br>${elem.id +"  "+ elem.name} <br>`);
        })
    }
    surname.onclick=()=>{
        data.forEach((elem)=>{
            div1.insertAdjacentHTML('beforeend', `<br>${elem.id +"  "+ elem.username} <br>`);
        })
    }
    email.onclick=()=>{
        data.forEach((elem)=>{
            putemail.insertAdjacentHTML('beforeend', `<br>${elem.id +"  "+ elem.email}<br>`);
      })
}

search.onclick=()=>{
    data.forEach((elem)=>{
        if(searchtxt.value==elem.username){
            text1.insertAdjacentHTML('beforeend', ` <br> ${elem.id +"  "+ elem.username} <br>`);
        } else {
            text1.insertAdjacentHTML('beforeend', ` <br> нет <br>`)
        }
     })   
    }
});

