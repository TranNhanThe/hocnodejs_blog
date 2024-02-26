const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes/index.route'); // step 1

const db = require('./config/db');
db.connect();//Connect to db

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(
    express.urlencoded({
 extended: true,
    }),
);
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
