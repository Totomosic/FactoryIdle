const express = require("express")
const app = express()

const config = require("./server_config.json")

const port = config.port || 8000

app.use("", express.static('./public'))
app.use("", express.static('./assets'))
app.use("", express.static('./images'))

app.listen(port, () => console.log(`Server listening at localhost:${port}`))