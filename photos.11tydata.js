module.exports = {photos: require('fs').readdirSync('../photos').filter(s=>!/^\./.test(s))};
