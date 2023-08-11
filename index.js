const express = require('express')
const app = express()
const port = 3000
const BASE_URL = `http://localhost:${port}`

app.use(express.static('images'))

app.get('/images', (req, res) => {
    res.json([
        'frame-06.png',
        'frame-07.png',
        'frame-08.png',
        'frame-09.png',
        'frame-10.png',
        'frame-11.png',
        'frame-12.png',
        'frame-13.png',
        'frame-14.png',
        'frame-15.png',
        'frame-16.png',
        'frame-17.png',
        'frame-18.png',
        'frame-19.png',
        'frame-20.png',
        'frame-21.png',
        'frame-22.png',
        'frame-23.png',
        'frame-24.png',
        'frame-25.png',
        'frame-26.png',
        'frame-27.png',
        'frame-28.png',
        'frame-29.png',
        'frame-30.png',
        'frame-31.png',
        'frame-32.png',
        'frame-33.png',
        'frame-34.png',
        'frame-35.png',
        'frame-36.png',
        'frame-37.png',
        'frame-38.png',
        'frame-39.png',
        'frame-40.png'
    ].map((image) => `${BASE_URL}/${image}`))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
