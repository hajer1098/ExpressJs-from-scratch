const { response } = require("express");
const express = require("express");

const app = express();

// ---use middleware----
// accept only json code
app.use(express.json())

//analyse uniquement les corps codés en URL
// form urlencoded postman
app.use(express.urlencoded())


const myList = [
    {
        item: 'milk',
        quantity: 2,
    },
    {
        item: 'jus',
        quantity: 1,
    },
    {
        item: 'milk',
        quantity: 2,
    },



];
app.get('/groceries', (req, res) => {
    res.send(myList)
});

app.post('/groceries', (req, res) => {

    console.log(req.body);
    //add item in the end
    myList.push(req.body);
    //use postman
    res.send(201);
})






//port
const PORT = 3001;
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));