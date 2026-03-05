const express = require('express');
//const fs = require('fs');
const port = 3000
const app = express();
app.use(express.json());
app.use(express.static("./public"))

//Get recipes

//Post recipes

//Put update recipes

//Delete recipes

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
