import express,  {Express} from "express"
import http from "http"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import { AuthRoutes } from "./routes"
import { logger, secretes } from "../../core"





// * init app

const app: Express = express()
const server = http.createServer(app)


// * enable json and url

app.use(express.json({limit:"1mb"}))
app.use(express.urlencoded({extended:true, limit:"1mb"}))
app.use(express.static("public"))

// TODO middleware 

app.use(cors({
    origin:"*",
    methods:["GET", "POST","PUT", "PATCH", "DELETE"],
    optionsSuccessStatus:204,
    preflightContinue:true
}))

app.use(cookieParser())
app.use(helmet())


// * routes

app.use("/api/v1/auth",AuthRoutes)




// * server start 

export async function startExpress(){
server.listen(secretes.PORT, () =>{
    logger.info(`server is running on http://127.0.0.1:${secretes.PORT}`)    
})
} 