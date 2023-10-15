

async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users/1")
    ).json();
    const posts = await (
        await fetch("https://jsonplaceholder.typicode.com/userId=1")
    ).json();

    console.log("users", users)
    console.log("posts", posts)
}

getData();

console.log(getData());