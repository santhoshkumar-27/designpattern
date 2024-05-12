var Addition = (function () {
    function Addition() {
    }
    Addition.prototype.calculate = function (a, b) {
        return a + b;
    };
    return Addition;
}());
var Subtraction = (function () {
    function Subtraction() {
    }
    Subtraction.prototype.calculate = function (a, b) {
        return a - b;
    };
    return Subtraction;
}());
var Multiplication = (function () {
    function Multiplication() {
    }
    Multiplication.prototype.calculate = function (a, b) {
        return a * b;
    };
    return Multiplication;
}());
var Divide = (function () {
    function Divide() {
    }
    Divide.prototype.calculate = function (a, b) {
        return a / b;
    };
    return Divide;
}());
var Remainder = (function () {
    function Remainder() {
    }
    Remainder.prototype.calculate = function (a, b) {
        return a % b;
    };
    return Remainder;
}());
var MathsContext = (function () {
    function MathsContext() {
    }
    MathsContext.prototype.setStrategy = function (context) {
        this.strategy = context;
    };
    MathsContext.prototype.execute = function (a, b) {
        return this.strategy.calculate(a, b);
    };
    return MathsContext;
}());
var context = new MathsContext();
context.setStrategy(new Addition());
console.log(context.execute(2, 2));
