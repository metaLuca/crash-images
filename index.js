const express = require('express')
const app = express()
const port = 3000
const BASE_URL = `http://localhost:${port}`

app.use(express.static('images'))

const imagesName = [
    'frame-06.jpg',
    'frame-07.jpg',
    'frame-08.jpg',
    'frame-09.jpg',
    'frame-10.jpg',
    'frame-11.jpg',
    'frame-12.jpg',
    'frame-13.jpg',
    'frame-14.jpg',
    'frame-15.jpg',
    'frame-16.jpg',
    'frame-17.jpg',
    'frame-18.jpg',
    'frame-19.jpg',
    'frame-20.jpg',
    'frame-21.jpg',
    'frame-22.jpg',
    'frame-23.jpg',
    'frame-24.jpg',
    'frame-25.jpg',
    'frame-26.jpg',
    'frame-27.jpg',
    'frame-28.jpg',
    'frame-29.jpg',
    'frame-30.jpg',
    'frame-31.jpg',
    'frame-32.jpg',
    'frame-33.jpg',
    'frame-34.jpg',
    'frame-35.jpg',
    'frame-36.jpg',
    'frame-37.jpg',
    'frame-38.jpg',
    'frame-39.jpg',
    'frame-40.jpg'
];

app.get('/images', (req, res) => {
    res.json(imagesName)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
