/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// const users = ["mehmet", "ayşe", "murat"];

// push;

// users.push("kemal")
// console.log(users)

// map;

// users.map((item) => {
//     console.log(item)
// });

const users = [
    {
        name:"ahmet",
        age:18
    },
    {
        name:"ahmet",
        age:20
    },
    {
        name:"ayşe",
        age:22
    },
    {
        name:"kemal",
        age:24
    }

];

// find;

const result = users.find((item)=> item.name==="ahmet" && item.age >20)
console.log(result)

