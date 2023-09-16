const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const addBoxerRouter = require('./routes/addBoxer.router');
const getBoxerRouter = require('./routes/getBoxer.router');
const deleteBoxerRouter =  require('./routes/deleteBoxer.router');
const searchFightersRouter = require('./routes/searchFighters.router');
const searchGender = require('./routes/searchGender');
const specificBoxer =  require('./routes/specificBoxer.router');
const editBoxer = require('./routes/editBoxer.router');
const fightDates = require('./routes/fightDates.router');
const matchRequest = require('./routes/matchRequest.router');
const getRequest = require('./routes/getRequest.router');
const incomingRequest = require('./routes/incomingRequest.router');
const acceptRequest = require('./routes/acceptRequest.router');
const declineRequest = require('./routes/declineRequest.router');
const getUpcomingMatch = require('./routes/upcomingMatch.router');
const getDeclineRequest =  require('./routes/getDeclineRequest.router');
const happenedMatch = require('./routes/happenedMatch.router');
const deleteMatch = require('./routes/deleteMatch.router');



// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/addBoxer', addBoxerRouter );
app.use('/api/getBoxer', getBoxerRouter);
app.use('/api/deleteBoxer', deleteBoxerRouter);
app.use('/api/searchFighters', searchFightersRouter);
app.use('/api/searchGender', searchGender);
app.use('/api/specific', specificBoxer);
app.use('/api/editBoxer', editBoxer);
app.use('/api/dates', fightDates);
app.use('/api/request', matchRequest);
app.use('/api/getRequest', getRequest);
app.use('/api/incomingRequest', incomingRequest);
app.use('/api/acceptRequest', acceptRequest);
app.use('/api/declineRequest', declineRequest);
app.use('/api/getUpcomingMatch', getUpcomingMatch);
app.use('/api/getDeclineRequest', getDeclineRequest);
app.use('/api/happenedMatch', happenedMatch);
app.use('/api/deleteMatch', deleteMatch);





// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
