const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/IAMS");
        console.log(`Database connection successful`);

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}

bootstrap();
