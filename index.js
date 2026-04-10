import express from "express";
import {db} from "./src/config/db.js";
import { register, login } from "./src/controllers/auth.controller.js";
import { protect } from "./src/middlewares/auth.middleware.js";

const app = express();
app.use(express.json());
db();
app.post("/register", register);
app.post("/login", login);
app.get("/profile", protect , (req, res) => {
    res.json({
        message: "Protected route accessed",
        data:req.user
    })
})
app.listen(5000, () => console.log("server running"))

