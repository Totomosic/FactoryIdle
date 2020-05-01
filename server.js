const express = require("express")
const { spawn } = require("child_process")
const path = require("path")
const app = express()

const config = require("./server_config.json")

const port = config.port || 8000

app.use("", express.static('./dist'))

const wp = spawn(path.resolve("./node_modules/.bin/webpack.cmd"), ["-w"], { stdio: "inherit" })
wp.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
})

app.listen(port, () => console.log(`Server listening at localhost:${port}`))