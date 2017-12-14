const proxy = require('http-proxy-middleware');

module.exports = router => {
    router.use('/api', proxy({
        target: 'http://localhost:5000',
        changeOrigin: true
    }));
}
