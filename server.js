require('dotenv').config();
require('./config/database');

const app = require('./app-server');
const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log(`${PORT} points to Ravenclaw`)
})