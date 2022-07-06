const express = require("express");
const app = express();
const PORT = 8000;
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors')
const schema = require("./Schemas");

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", (a, b) => {
  b.send("The server is online!");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
