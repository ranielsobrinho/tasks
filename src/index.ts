import 'reflect-metadata'
import * as express from 'express'
import * as bdParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)