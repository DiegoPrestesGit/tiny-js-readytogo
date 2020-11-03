import express from 'express'

const app = express()
app.use(express.json())

app.use('/', (request, response) => {
  response.json('Hey, hey people, Sseth here')
})

app.listen(3000)
