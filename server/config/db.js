const mongoose = require('mongoose');

const connectDB = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@mernchatapp.ighhd5a.mongodb.net/MernChatApp`
    try{
        await mongoose.connect(URL, {
            useUnifiedtopology: true,
			useNewUrlParser: true, 
        });
        console.log('Database connected successfully')
	} catch (error) {
		console.log('Error while connecting to Database', error.message);
        // process.exit();
	}
}

module.exports = connectDB;