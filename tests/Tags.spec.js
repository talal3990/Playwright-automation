const {test, expect} = require('@playwright/test');
test(' Test1@sanity', async ({ page }) => {
    console.log('This is my test 1...')
})

test(' Test2@sanity', async ({ page }) => {
    console.log('This is my test 2...')
})

test(' Test3@regression', async ({ page }) => {
    console.log('This is my test 3...')
})

test(' Test4@regression', async ({ page }) => {
    console.log('This is my test 4...')
})

test(' Test5@sanity@regression', async ({ page }) => {
    console.log('This is my test 5...')
})