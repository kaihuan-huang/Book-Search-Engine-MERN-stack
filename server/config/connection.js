const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

//mongodb+srv://huanhuan:huanhuan@cluster0.5tnl5uk.mongodb.net/bookSearchEngine?retryWrites=true&w=majority