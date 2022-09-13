import express from "express";

const app = express();
let port = 3000;
app.get("/", (req, res) => {
  res.send("<h1>Hello World from Ruqayyah </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
