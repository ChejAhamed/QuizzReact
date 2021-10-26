const { connect } = require('mongoose');
const debug = require('debug')('cartItem');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }

)
  .then(
    () => debug('Databaseconnectionstablished'),
    (error) => debug(error)
  );
