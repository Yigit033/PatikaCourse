

const sayhi = () => {
     
}


// setTimeout(() => {
//     console.log("merhaba")
// }, 2000);


// setInterval(() => {
//     console.log("Merhaba bu durdurmazsam eğer her sn de bir tekrar çalışacak")
// }, 1000);


// FETCH KULLANIMI

// import fetch from "node-fetch"; 

// fetch( "https://jsonplaceholder.typicode.com/users" )
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("users yüklendi",users)
    
//         fetch( "https://jsonplaceholder.typicode.com/posts/1" )
//         .then((data) => data.json())
//         .then((users) => {
//             console.log("Post 1 yüklendi",post)

//             fetch( "https://jsonplaceholder.typicode.com/posts/2" )
//             .then((data) => data.json())
//             .then((users) => console.log("Post 2 yüklendi",data));
//             });
        
//         });




// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users", users)
//     console.log("users", post1)
//     console.log("users", post2)
// }    

// getData();


// bU İKİSİ DE FETCHİNG İŞLEMİDİR AMA SADECE BİRİ ASYNC İLE DİĞERİ FETCH İLE YAZILIYOR
// bURADA TEK FARKLI OLAN ŞEY KOD GÖRÜNÜMLERİ MANTIKLARI VE YAPTIKLARI AYNI



// import axios from "axios"

// (async () => { 
//     const { data: users } = await axios( 
//     "https://jsonplaceholder.typicode.com/users" ); 

// const { data: post1} = await axios ( 
//     "https://jsonplaceholder.typicode.com/posts/1" ); 

// const { data: post2} = await axios (
//     "https://jsonplaceholder.typicode.com/posts/2" ); 

// console.log("users", users); 
// console.log("post1", post1); 
// console.log("post2", post2); })();


// BU DA FETCH-DATA DAN DAHA AZ KOD YAZMAMIZI SAĞLAR AYNI İŞLEVİ GÖRÜR.

