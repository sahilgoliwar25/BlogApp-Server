const express = require("express");
const cors = require("cors");
const app = express();
const { data } = require("./Controller/dataController");
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("This is Home");
});
app.get("/fetch", data);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000/`);
});
