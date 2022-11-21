const express = require("express");
const routes = require("./routes");
// This imports sequelize connection

const app = express();
// This is the port
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync Sequelize models to the database
// then it turns on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
