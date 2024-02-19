import express from 'express'

const app = express()

app.post('/api/upload', (req, res) => {
  setTimeout(() => {
    res.json({ hello: 'world' })
  }, 1000)
})

export const handler = app
