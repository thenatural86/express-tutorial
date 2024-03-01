const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))

// app.get('/', (req, res) => {
//   console.log('Hello World!')
//   res.send('Home')
// })

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
  // res.send()
})

app.listen(5000, () => {
  console.log(people)
  console.log('Server is listening on Port : 5000....')
})
