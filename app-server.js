const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

app.use(express.json()); // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next();
});
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'brand-cthulhu.svg')));
app.use(express.static(path.join(__dirname, 'public')));

// Put API routes here, before the "catch all" route
app.use('/api/allies', require('./routes/api/allies'));
app.use('/api/game-maps', require('./routes/api/gameMaps'));
app.use('/api/game-monsters', require('./routes/api/gameMonsters'));
app.use('/api/games', require('./routes/api/games'));
app.use('/api/game-scenarios', require('./routes/api/gameScenarios'));
app.use('/api/investigators', require('./routes/api/investigators'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/locations', require('./routes/api/locations'));
app.use('/api/maps', require('./routes/api/maps'));
app.use('/api/monsters', require('./routes/api/monsters'));
app.use('/api/neighborhoods', require('./routes/api/neighborhoods'));
app.use('/api/player-allies', require('./routes/api/playerAllies'));
app.use('/api/player-investigators', require('./routes/api/playerInvestigators'));
app.use('/api/scenarios', require('./routes/api/scenarios'));
app.use('/api/spells', require('./routes/api/spells'));
app.use('/api/streets', require('./routes/api/streets'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;