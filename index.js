import express from "express"
const PORT = 3060
const app = express()

app.get("/", (req, res) => {
    res.send("index")
});

app.get('/water', (req, res) => {
    res.send ("hi water")
});

app.listen (PORT, () => {
    console.log (`listening on http://localhost:${PORT}`)
})