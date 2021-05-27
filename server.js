const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

const db = require("./models");

// set port
const PORT = process.env.PORT || 8080;

// db.sequelize.sync({ force: true })
//     .then(() => {
//         console.log("Drop and re-sync db");
//     });

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Hello Hello"
    });
})

require("./routes/tutorial.route")(app);
require("./routes/user.route")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})