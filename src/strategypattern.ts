interface Maths {
    calculate(a: number, b: number): number;
}

// concrete strategy
class Addition implements Maths {
    calculate(a: number, b: number): number {
        return a + b;
    }
}

// concrete strategy
class Subtraction implements Maths {
    calculate(a: number, b: number): number {
        return a - b;
    }
}

// concrete strategy
class Multiplication implements Maths {
    calculate(a: number, b: number): number {
        return a * b;
    }
}

// concrete strategy
class Divide implements Maths {
    calculate(a: number, b: number): number {
        return a / b;
    }
}

// concrete strategy
class Remainder implements Maths {
    calculate(a: number, b: number): number {
        return a % b;
    }
}

// concrete strategy
class MathsContext {
    private strategy: Maths;

    setStrategy(context: Maths): void {
        this.strategy = context;
    }

    execute(a: number, b: number): number {
        return this.strategy.calculate(a, b);
    }

}
// created a context for Calculations
const context = new MathsContext();
// setting a context is Addition
context.setStrategy(new Addition())
// Doing some alogrithm
console.log(context.execute(2, 2))