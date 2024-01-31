const express = require('express');

const app = express()

const PORT = process.env.PORT || 3300


app.get('/', (req, res) => {
  res.send(`servidor corriendo 👍`)
})


//__dirname es el directorio actual donde se esta ejecutando la aplicacion
app.use(express.static(__dirname + '/public'));

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})


app.listen(PORT, () => {
  console.log(`el servidor esta corriendo en http://localhost:${PORT}\n`)
})
