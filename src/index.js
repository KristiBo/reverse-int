module.exports = function reverse(n) {
    return n > 0
        ? n.toString().split('').reverse().join('')
        : Math.abs(n).toString().split('').reverse().join('');
};
