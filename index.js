const PORT = 3000;
const express = require("express");
const app = express();
const route = require("./routes");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log("Application started and Listening on port ..." + PORT);
});

route(app);
