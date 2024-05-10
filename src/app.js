import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenvConfig from "./config/dotenvConfig.js";


const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = dotenvConfig.app.PORT;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res) => {
    res.send("<h1>Servidor APP</h1>")
})


const server = app.listen(PORT, () => {
    console.log(`Server levantado en http://localhost:${PORT}`);
})