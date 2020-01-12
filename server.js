const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
const path = require('path');


connectDB()

app.use(express.json({extended: false}))



//routes
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/profile', require('./routes/profile'))
// app.use('/posts', require('./routes/posts'))


if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('index.html'));
    });
  }
  
  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));