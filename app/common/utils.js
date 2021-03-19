const flatten = obj =>
    Object.keys(obj).reduce((acc, key) => {
        const val = obj[key];
        return acc.concat(typeof val === 'object' ? flatten(val) : val);
    }, []);

module.exports = {
    flatten
}