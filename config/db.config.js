const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

module.exports = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log('Connected to the MongoDB database (Study Finder)')
    } catch (error) {
        console.log(
            `${error} could not connect, please make sure there is a mongoDB link in you env file.`
        )
    }
}
