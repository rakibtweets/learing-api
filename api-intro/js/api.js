function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}


function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayUsers(data){
    const ul = document.getElementById('users')

    // console.log(ul)
    for(const user of data){
        // console.log(user.name)
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name}\nEmail: ${user.email}`
        ul.appendChild(li)
    }
};

// fetch data from api and display comments

function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (response => response.json())
    .then(data => displayComment(data))
};

function displayComment(data){
    const containerDiv = document.getElementById('comments')
    containerDiv.style.backgroundColor = 'dodgerblue'
    containerDiv.style.color = 'white'
    for(const body of data){
        const para = document.createElement('p');
        para.style.border = '2px solid yellow'
        para.innerText = `Id:${body.id}\nName: ${body.name}\nEmail: ${body.email}`
        containerDiv.appendChild(para)
       if(body.id == 10){
           break;
       }
    }
    // console.log(containerDiv)
}
