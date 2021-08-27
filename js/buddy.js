const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = (data) => {

    const buddies = data.results
    const buddiesContainer = document.getElementById('buddies')
    for( const buddy of buddies){

        // distructuring name obj of buddy obj
        const {title,first,last} = buddy.name
        const {number,name} = buddy.location.street
        const p = document.createElement('p')
        p.classList.add('buddy')

        // templete string
        p.innerText = `
        Name: ${title} ${first} ${last}\n
        Email: ${buddy.email}\n
        Street: ${number}, ${name}
         
        ` 
        buddiesContainer.appendChild(p)    
    }

}