const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    domains: process.env.DOMAINS,
  },
  i18n,
  reactStrictMode: true,
};
