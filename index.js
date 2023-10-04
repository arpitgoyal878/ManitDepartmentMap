const express = require("express");
const env = require("dotenv").config();
const asyncHandler = require("express-async-handler");
// const connectDb = require('./config/db');
// const { errorHandeler } = require('./middlewares/errorHandler');
// const userRoutes = require('./routes/userRoute');
const path = require("path");
const rootDir = require("./util/path");

const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;

// const userRoutes = require("./routes/user");
// const deptRoutes = require('./routes/dept')
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

/// Redirecting to different routes for different requests.
// app.use('/civil', deptRoutes)
// app.use('/dept', deptRoutes)
// app.use(userRoutes)

//redirecting to default index.html

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.get("/civil", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "civil.html"));
});
app.get("/mechanical", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "mechanical.html"));
});
app.get('/electrical', (req, res) => {
  res.sendFile(path.join(rootDir, "views", "electrical.html"));
});
app.get("/msme", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "msme.html"));
});
app.get("/", (req, res) => {
  console.log("first call")
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).sendFile(path.join(rootDir, "views", "404page.html"));
});

app.listen(port, () => {
  console.log(`server is listing at port ${port}`);
});
