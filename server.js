const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')
// Axios é semelhante ao fetch do frontend

app.use(cors())

app.get('/', async (req, res) => {

  // response é a resposta do axios mas eu tiro o data de dentro do response
  //const response = await axios('https://jsonplaceholder.typicode.com/users')
  try{
    const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    //console.log(data)
     return res.json(data)
  }catch(error){
    console.log(error)
  }
})


app.listen('3000 ')