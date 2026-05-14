// // 1) GET    -> Fetch all Post
// const { test, expect } = require('@playwright/test')

// test('GET : Fetch all posts', async ({ request }) => {

//     const response = await request.get('https://jsonplaceholder.typicode.com/posts');
//     expect(response.status()).toBe(200 );

//     const body = await response.json();
//     console.log("Total post fetched :", body.length);
//     expect(body.length).toBeGreaterThan(0);
// });

// // 2) POST - Create a new post with data

// test('POST : Create a new post', async ({ request }) => {

//     const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
//         data: {
//             title: "Learing Playwright Automation",
//             body: "This was recently created in this URl",
//             userId: 121
//         }
//     });

//     expect(response.status()).toBe(201); // Created
//     const body = await response.json();
//     console.log("Created Post ID : ", body.id);
//     expect(body).toHaveProperty('id');
//     expect(body.title).toBe('Learing Playwright Automation');
// });

// // 3) PUT   -> Update an existing post fully

// test('PUT : Update a post with new data', async ({ request }) => {

//     const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
//         data: {
//             id: 1,
//             title: "This is API Automation",
//             body: "This Post was recently updated",
//             userId: 121
//         }
//     });

//     expect(response.status()).toBe(200);
//     const body = await response.json();
//     console.log("Upadted Post Title:", body.title);
//     expect(body.title).toBe('This is API Automation');
// });

// // 4) DELETE   -> Delete a Post

// test('DELETE : Delete a post', async ({ request }) => {
//     const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
//     expect(response.status()).toBe(200);
//     console.log("Post deleted successfully");
// });

//GET --> Fetch all Posts

const{test, expect, request} = require('@playwright/test');

test('GET: Fecth all posts',async({request})=>{
    const response =  await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Total posts:',body.length);
    expect(body.length).toBeGreaterThan(0);
})


// POST --> Create a new post with data

test('POST', async({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/posts',{
        data:{
            title : "Learning playwright",
            body: "This was recently peaked",
            userId: 121
        }
    })

    expect(response.status()).toBe(201); // created
    const body =await response.json()
    console.log("Created Post ID", body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Learning playwright')

})

//PUT --> update an existing post 

test('PUT',async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data:{
        id:1,
        title : "This is API",
        body: "This is recently updated",
        userId:121
        }

    });

    expect(response.status()).toBe(200);
    const body  = await response.json();
    console.log("updated post title", body.title);
    expect(body.title).toBe('This is API')

})
//delete --> Delete a post

test('Delete', async({request})=>{
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status()).toBe(200);
    console.log("Post deleted")
})




















