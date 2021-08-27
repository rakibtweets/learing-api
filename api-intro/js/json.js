// javascript Object Notation

// JSON => Javascript Object Notation

const user ={
    id: 1,
    name: 'Rakib Hasan',
    job: ' Web developer'
}
// console.log(user) // js object output

// conver to json file
const stringified = JSON.stringify(user)

// console.log(stringified) // json output


// complex js obeject

const shop = {
    name:'Rakib Store',
    address:'Hatimara',
    profit: 15000,
    owner:{
        name:'Rakib Hasan',
        profession:'Web developer'
    },
    products: ['laptop','desktop','pepsi','computer excesories'],
    isExpensive: false
};
// console.log(shop)
// js object to json stringified
const shopStringified = JSON.stringify(shop)
console.log(shopStringified)

// json to js object

const converted = JSON.parse(shopStringified)

console.log(converted)