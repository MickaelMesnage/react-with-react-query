import express from "express";
import cors from "cors";
import pandaRouter from "./src/panda/router";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/pandas', pandaRouter);

app.listen(8080, () => {
    console.log(`Server is running on port 8080.`);
});
