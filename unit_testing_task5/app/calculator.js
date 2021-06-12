/**
 *
 *
 * @class Calculator
 */
/**
 *a simple class that has "add" and "multiply" methods
 *
 * @class Calculator
 */
class Calculator {
/**
 * Creates an instance of Calculator.
 * @memberof Calculator
 */
constructor () {
};

/**
 *
 *
 * @param {...args} args
 * @return {Number} a sum of numbers 
 * @memberof Calculator
 */
  summarizeParameters(...args) {
    for (let i= 0; i < args.length; i++) {
        if (typeof args[i] !=='number') {
        throw new Error ('Please enter numbers only');
        }
    }
    return args.reduce((num, i) => num+=i);
}

/**
 *
 *
 * @param {...args} args
 * @return {Number} multiplied parameters
 * @memberof Calculator
 */
multiplyParameters(...args) {
    for (let i= 0; i < args.length; i++) {
        if (typeof args[i] !=='number') {
            throw new Error ('Please enter numbers only');
        } 
    }
    return args.reduce((num, i) => num*=i);
}
}

module.exports = Calculator;
