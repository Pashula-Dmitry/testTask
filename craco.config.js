const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@core': path.resolve(__dirname, 'src/core/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@store': path.resolve(__dirname, 'src/shared/store/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
