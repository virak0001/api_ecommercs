module.exports = {
  prefix: process.env.API_PREFIX,
  key: {
    enabled: process.env.API_KEY_ENABLED === 'true',
    name: process.env.API_KEY_NAME,
    prefix: process.env.API_KEY_PREFIX,
    value: process.env.API_KEY_VALUE,
  },
  doc: {
    enabled: process.env.API_DOC_ENABLED === 'true',
    url: process.env.API_DOC_URL || '/doc',
    user: process.env.API_DOC_USER || 'developer',
    pwd: process.env.API_DOC_PWD || 'q1w2e3r4t5',
  },
};
