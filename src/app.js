import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenvConfig from "./config/dotenvConfig.js";


const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = dotenvConfig.app.PORT || 3000;
const app = express();

//midlewars
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));

// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');


app.get("/", (req,res) => {
   res.render("home")
})


const server = app.listen(PORT, () => {
    console.log(`Server levantado en http://localhost:${PORT}`);
})