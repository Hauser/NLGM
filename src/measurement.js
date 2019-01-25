const Point = require('./point');

class Measurement {
    constructor() {
        this.isRunning = false;
        this.points = [];
    }
    start() {
        this.isRunning = true;
    }
    finish() {
        this.points = [];
        this.isRunning = false;
    }
    // 2.000 [mV], 1 [ms]
    process(data) {
        var m = data.split(',');
        var point = new Point(parseFloat(m[0]), parseFloat(m[1]));
        this.points.push(point);
    }
    getTestData() {
        let p = (volt, ms) => new Point(volt, ms);
        let RNG = (min, max) => Math.floor(Math.random() * (max - min) + min);
        let random = RNG(0, 3);
        switch (random) {
            case 1:
                return {
                    l1: 100,
                    l2: 200,
                    m1: [p(0, 0), p(0, 1), p(0, 2), p(0, 3), p(0, 4), p(0, 5), p(0, 6), p(0, 7), p(0, 8), p(0, 9), p(0, 10), p(0, 11), p(0, 12),
                    p(0, 13), p(0, 14), p(0, 15), p(0, 16), p(1, 17), p(2, 18), p(3, 19), p(4, 20), p(5, 21), p(6, 22), p(7, 23), p(8, 24),
                    p(10, 25), p(345, 26), p(10, 27), p(8, 28), p(7, 29), p(6, 30), p(5, 31), p(4, 32), p(3, 33), p(2, 34), p(1, 35), p(0, 36),
                    p(0, 37), p(0, 38)],
                    m2: [p(0, 0), p(0, 1), p(0, 2), p(0, 3), p(0, 4), p(0, 5), p(10, 6), p(333, 7), p(10, 8), p(8, 9), p(7, 10), p(6, 11), p(5, 12),
                    p(4, 13), p(3, 14), p(2, 15), p(1, 16), p(0, 17), p(0, 18), p(0, 19)],
                    result: 100
                };
            case 2:
                return {
                    l1: 100,
                    l2: 200,
                    m1: [p(0, 0), p(0, 1), p(0, 2), p(0, 3), p(0, 4), p(0, 5), p(0, 6), p(0, 7), p(0, 8), p(0, 9), p(0, 10), p(0, 11), p(0, 12),
                    p(0, 13), p(0, 14), p(0, 15), p(0, 16), p(1, 17), p(2, 18), p(3, 19), p(4, 20), p(5, 21), p(6, 22), p(7, 23), p(8, 24),
                    p(300, 25), p(25, 26), p(-7, 27), p(7, 28), p(7, 29), p(6, 30), p(5, 31), p(4, 32), p(3, 33), p(2, 34), p(1, 35), p(0, 36),
                    p(0, 37), p(0, 38)],
                    m2: [p(0, 0), p(0, 1), p(0, 2), p(0, 3), p(0, 4), p(0, 5), p(10, 6), p(333, 7), p(10, 8), p(8, 9), p(7, 10), p(6, 11), p(5, 12),
                    p(4, 13), p(3, 14), p(2, 15), p(1, 16), p(0, 17), p(0, 18), p(0, 19)],
                    result: 100
                };
            default:
                return {
                    l1: 100,
                    l2: 200,
                    m1: [p(0, 0), p(0, 1), p(0, 2), p(0, 3), p(0, 4), p(0, 5), p(0, 6), p(0, 7), p(0, 8), p(0, 9), p(0, 10), p(0, 11), p(0, 12),
                    p(0, 13), p(0, 14), p(0, 15), p(0, 16), p(1, 17), p(2, 18), p(3, 19), p(4, 20), p(5, 21), p(6, 22), p(7, 23), p(8, 24),
                    p(10, 25), p(312, 26), p(0, 27), p(-10, 28), p(-7, 29), p(6, 30), p(5, 31), p(4, 32), p(3, 33), p(2, 34), p(1, 35), p(0, 36),
                    p(0, 37), p(0, 38)],
                    m2: [p(0, 0), p(0, 1), p(0, 2), p(0, 3), p(0, 4), p(0, 5), p(10, 6), p(333, 7), p(10, 8), p(8, 9), p(7, 10), p(6, 11), p(5, 12),
                    p(4, 13), p(3, 14), p(2, 15), p(1, 16), p(0, 17), p(0, 18), p(0, 19)],
                    result: 100
                };
        }
    }
}

module.exports = Measurement;
