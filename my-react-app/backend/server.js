const express = require('express');  //Routing
const cors = require('cors');
const mongoose = require('mongoose'); //Allows for communication between Node.JS and MongoDB

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(
    "mongodb+srv://pow:pow@cluster0.higeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const ParkingSpaceRouter = require('./routes/ParkingSpace');
const usersRouter = require('./routes/users');

app.use('/ParkingSpace', ParkingSpaceRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
