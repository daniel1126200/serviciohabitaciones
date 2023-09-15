//importando la herramienta

const express = require('express')
const app = express()
//ATENDIENDO PETICIONES 
//guardar
app.post('/api/habitaciones', function (req, res) {
  res.send('estoy guardando una habitacion')
})
//buscar
app.get('/api/habitaciones', function (req, res) {
  res.send('estoy buscando todas las habitaciones')
})
//buscar
app.get('/api/habitacion/precio', function (req, res) {
  res.send('estoy buscando una haitacion')
})
//modificar
app.put('/api/habitaciones', function (req, res) {
  res.send('estoy modificando una habitacion')
})
//para eliminar
app.delete('/api/habitaciones', function (req, res) {
  res.send('estoy eliminando una habitacion')
})
//levantando un servidor 
app.listen(3001,function(){
  console.log ("servidor operando")
})