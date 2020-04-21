const express = require("express")
const { spawn } = require("child_process")
const app = express()

const config = require("./server_config.json")

const port = config.port || 8000

app.use("", express.static('./public'))
app.use("", express.static('./assets'))
app.use("", express.static('./images'))

const wp = spawn("build_src.bat")
wp.stdout.on('data', (data) => {
    console.log(`${data}`);
})
wp.stderr.on('data', (data) => {
    console.error(`${data}`);
})
wp.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
})

app.listen(port, () => console.log(`Server listening at localhost:${port}`))