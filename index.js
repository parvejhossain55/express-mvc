const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found",
    });
    next();
});

app.listen(3000, () => console.log(`Example app!`));
