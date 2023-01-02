/* eslint-disable */
const {start} = require('./server') ;
const {db} = require('./models/index')

const port = process.env.PORT || 5000;



db.sync().then(()=>{
  start(port)
}).catch(console.error)
