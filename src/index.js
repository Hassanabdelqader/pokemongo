/* eslint-disable */
const {start} = require('./server') ;
const {db} = require('./models/index')

const port = process.env.PORT || 5000;


start(port)

// db.sync().then(()=>{
// }).catch(console.error)
