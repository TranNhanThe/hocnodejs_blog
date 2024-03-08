// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1/f8_education_dev', 

//         );
//         console.log('Connect successfully!!!');
//     } catch (error) {
//         console.log('Connect Fail!');
//     }
// }

// module.exports = { connect };


// ở dưới đây là connect server atlas---------------------------------------------------------------------------------------------

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nhanthe133:0977343132As@cluster0.uw1j0wh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected successfully to MongoDB Atlas!');
    } catch (error) {
        console.error('Failed to connect to MongoDB Atlas:', error);
    }
}

module.exports = { connect };
