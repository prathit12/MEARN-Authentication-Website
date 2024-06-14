const mongoose = require('mongoose');

const connectionDB  = async () => {
    try{
        const conn  = await mongoose.connect(process.env.Mongo_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    }catch (error){
        console.log(error);
        process.exit(1)
    }
}

// console.log('file change')

module.exports = connectionDB