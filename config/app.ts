// export default () => ({
//   host: process.env.APP_HOST || 'localhost',
//   port: process.env.APP_PORT || 9000,
//   stage: process.env.APP_STAGE || 'production',
//   url: process.env.APP_URL,
//   isProduction() {
//     return (
//       process.env.NODE_ENV ||
//       process.env.APP_STAGE ||
//       'production' === 'production'
//     );
//   },
// });
module.exports = {
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3000,
  stage: process.env.APP_STAGE || 'production',
  url: process.env.APP_URL,
  isProduction() {
    return (
      process.env.NODE_ENV ||
      process.env.APP_STAGE ||
      'production' === 'production'
    );
  },
};
