const express = require(express);
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Set up CICD for backend app",
  });
});

app.listen(5000);
