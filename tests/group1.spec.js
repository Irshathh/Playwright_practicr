// const { test, expect } = require('@playwright/test')

// test.beforeAll(async () => {
//     console.log("This is BeforeAll Hook..");

// });

// test.afterAll(async () => {
//     console.log("This is AfterAll Hook..");

// });

// test.beforeEach(async () => {
//     console.log("This is BeforeEach Hook..");

// });

// test.afterEach(async () => {
//     console.log("This is AfterEach Hook..");

// });

// test.describe.only('Group 1', () => {

//     test('Test 1', async ({ page }) => {
//         console.log("This is Group Test 1..");
//     });

//     test('Test 3', async ({ page }) => {
//         console.log("This is Group Test 3..");
//     });
// });

// test.describe('Group 2', () => {

//     test('Test 2', async ({ page }) => {
//         console.log("This is Group Test 2..");
//     });

//     test('Test 4', async ({ page }) => {
//         console.log("This is Group Test 4..");
//     });
// });
import{test, expect} from '@playwright/test'

test.beforeAll('before all' , async()=>{
    console.log('This is before all Hook')
})

test.afterAll('after all' , async()=>{
    console.log('This is after all Hook')
})

test.beforeEach('before each' , async()=>{
    console.log('This is before each Hook')
})
test.afterEach('after each' , async()=>{

    console.log('This is after each Hook')
})
test.describe('Group1', ()=>{
    test('test1', async({page})=>{
    console.log('this is test 1')
})

test('test2', async({page})=>{
    console.log('this is test 2')
})
    
} )

test.describe('Group 2', ()=>{

    test('test3', async({page})=>{
    console.log('this is test 3')
})


test('test4', async({page})=>{
    console.log('this is test 4')
})


})







































