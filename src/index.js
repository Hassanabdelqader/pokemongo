/* eslint-disable */
const {start} = require('./server') ;
const {db} = require('./models/index')

const port = process.env.PORT || 8080;


start(port)



db.sync().then(()=>{
}).catch(console.error)





