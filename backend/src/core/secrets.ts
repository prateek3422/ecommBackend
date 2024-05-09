import dotenv from "dotenv"

dotenv.config()

const _config = {
    PORT:process.env.PORT!,
    NODE_ENV:process.env.NODE_ENV!,
    MONGODB_URI:process.env.MONGODB_URI
}


export const secretes = Object.freeze(_config)