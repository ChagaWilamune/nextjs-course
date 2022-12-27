const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'chaga1234',
        mongodb_password: 'ohGjzCrwnyrW9mHx',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-app-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'chaga1234',
      mongodb_password: 'ohGjzCrwnyrW9mHx',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-app',
    },
  }
};
