const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "*" }));

// middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// ---------

app.get("/", (req, res) => {
    let arr = []
    arr[0] = {
        name: "home",
        lat: Math.random() * (24 - 21) + 21,
        lng: Math.random() * (84 - 81) + 81,
    }
    for (let i = 0; i < 2; i++) {
        arr[i + 1] = {
            name: i + 1,
            lat: Math.random() * (24 - 21) + 21,
            lng: Math.random() * (84 - 81) + 81,
        }
    }

    arr.push(
        arr[0]
    )
    res.send(JSON.stringify(
        arr
    ))
})

app.listen(8080, () => {
    console.log("Listening on post 8080")
});
