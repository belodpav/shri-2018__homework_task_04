const {PORT, HOST} = require('./config');
const express = require('express');
const app = express();

const router = require('./routes/index');

app.set('views', './src/components/page/_type');
app.set('view engine', 'pug');

app.use('/static', express.static('dist'));
app.use(router);

app.listen(PORT, HOST, () => {
    /* eslint-disable no-console */
    console.log(`Application is running on port ${PORT}!`);
    /* eslint-enable no-console */
});
