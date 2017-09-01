const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4545




app.use(cors())
app.use(bodyParser.json())

app.listen(() => console.log(`listening on port: ${port}`))
