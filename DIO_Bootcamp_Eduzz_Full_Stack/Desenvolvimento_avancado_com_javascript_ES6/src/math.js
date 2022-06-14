class Math {
    sum(x,y, callback) {
        setTimeout(() => {
            callback(x+y);
        },1000)
    };
    multiply(x,y) {
        return x * y;
    };
    printSum(req, res, a, b) {
        res.load('index', a + b)
    }
}

module.exports = Math;

