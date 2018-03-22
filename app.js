const {PORT, HOST} = require('./config/config');
const express = require('express');
const app = express();

const router = require('./routes/index');

app.set('views', './views');
app.set('view engine', 'pug');

app.param(['id', 'co'], (req, res, next, id) => {
    next();
});

app.use('/static', express.static('dist'));
app.use(router);

app.listen(PORT, HOST, () => {
    /* eslint-disable no-console */
    console.log(`Application is running on port ${PORT}!`);
    /* eslint-enable no-console */
});
