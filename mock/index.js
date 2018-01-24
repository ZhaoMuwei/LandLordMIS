const fs = require('fs');
const path = require('path');

module.exports = () => {
    const data = {};
    fs.readdirSync(path.join(__dirname, 'data')).forEach(file => {
        data[file.replace('.js', '')] = require('./data/' + file);
    });
    return data;
};
