const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
//const { fileURLToPath } =require( "url");
const db = require("./conf/db");
const app = express();
const { register } = require("./controllers/auth.js");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const { createPost } = require("./controllers/posts");
const { verifyToken } = require("./middleware/auth");
/*** Configurations ***/

//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

dotenv.config({ path: "./conf/.env" });
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "35mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "35mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/*File Storage*/

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/assets");
	},
	filename: function (reqm, file, cb) {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage });

/*Running Server On */
//**>DATA setUp

db();

//**> routes files
app.post("/auth/register", register);
app.post("/posts", verifyToken, createPost);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const port = process.env.PORT || 4545;
app.listen(port, () =>
	console.log(`======> hermano  PORT : ${port}<=========`)
);
