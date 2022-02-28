require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FtBEOYgtiPinit1Osb44vrad1ivmXRvt',
      accounts: ['5d1224bf213596524a544f26f7b910e6d1ee50148d102f6ebf743b65a176a396']
    },
  },
};