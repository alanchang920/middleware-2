const express = require('express')
const dayjs = require('dayjs')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const startTime = new Date()
  const formattedData = new Date().toLocaleString()
  const method = req.method;
  const url = req.url

  res.on('finish', () => {
    const endTime = new Date()
    const duration = endTime - startTime
    let log = `[${formattedData}] | ${method} from ${url} ${duration}ms`
    console.log(log)
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
