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

class Divide implements Maths {
    calculate(a: number, b: number): number {
        return a / b;
    }
}

class Remainder implements Maths {
    calculate(a: number, b: number): number {
        return a % b;
    }
}

class MathsContext {
    private strategy: Maths;

    setStrategy(context: Maths): void {
        this.strategy = context;
    }

    execute(a: number, b: number): number {
        return this.strategy.calculate(a, b);
    }

}

const context = new MathsContext();

context.setStrategy(new Addition())
console.log(context.execute(2, 2))