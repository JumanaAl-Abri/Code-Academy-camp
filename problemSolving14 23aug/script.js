function evalExp(expression) {
    const stack = [];

    for (const char of expression) {
        if (!isNaN(char)) {
            stack.push(Number(char));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch (char) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error(`Invalid operator: ${char}`);
            }
        }
    }

    return stack.pop();
}

console.log(evalExp("231*+9-")); 
