import React from "react";
import { CodeBlock } from 'react-code-blocks';

const Operators = () => {

    const addition = `console.log(2 + 2);
    // Expected output: 4
    
    console.log(2 + true);
    // Expected output: 3
    
    console.log('hello ' + 'everyone');
    // Expected output: "hello everyone"
    
    console.log(2001 + ': A Space Odyssey');
    // Expected output: "2001: A Space Odyssey"`;

    const increment = `let x = 3;
    const y = x++;
    
    console.log${'(`x:${x}, y:${y}`)'};
    // Expected output: "x:4, y:3"
    
    let a = 3;
    const b = ++a;
    
    console.log${'(`a:${a}, b:${b}`)'};
    // Expected output: "a:4, b:4"`

    const subtraction = `console.log(5 - 3);
    // Expected output: 2
    
    console.log(3.5 - 5);
    // Expected output: -1.5
    
    console.log(5 - 'hello');
    // Expected output: NaN
    
    console.log(5 - true);
    // Expected output: 4`;

    const decrement = `let x = 3;
    const y = x--;
    
    console.log${'(`x:${x}, y:${y}`)'};
    // Expected output: "x:2, y:3"
    
    let a = 3;
    const b = --a;
    
    console.log${'(`a:${a}, b:${b}`)'};
    // Expected output: "a:2, b:2"`

    const multiplication = `console.log(3 * 4);
    // Expected output: 12
    
    console.log(-3 * 4);
    // Expected output: -12
    
    console.log('3' * 2);
    // Expected output: 6
    
    console.log('foo' * 2);
    // Expected output: NaN`;

    const division = `console.log(12 / 2);
    // Expected output: 6
    
    console.log(3 / 2);
    // Expected output: 1.5
    
    console.log(6 / '3');
    // Expected output: 2
    
    console.log(2 / 0);
    // Expected output: Infinity`;

    const assignment = `let x = 2;
    const y = 3;
    
    console.log(x);
    // Expected output: 2
    
    console.log((x = y + 1)); // 3 + 1
    // Expected output: 4
    
    console.log((x = x * y)); // 4 * 3
    // Expected output: 12`;

    const equality = `console.log(1 == 1);
    // Expected output: true
    
    console.log('hello' == 'hello');
    // Expected output: true
    
    console.log('1' == 1);
    // Expected output: true
    
    console.log(0 == false);
    // Expected output: true`;

    const strictEquality = `console.log(1 === 1);
    // Expected output: true
    
    console.log('hello' === 'hello');
    // Expected output: true
    
    console.log('1' === 1);
    // Expected output: false
    
    console.log(0 === false);
    // Expected output: false`;

    const exponentiation = `console.log(3 ** 4);
    // Expected output: 81
    
    console.log(10 ** -2);
    // Expected output: 0.01
    
    console.log(2 ** (3 ** 2));
    // Expected output: 512
    
    console.log((2 ** 3) ** 2);
    // Expected output: 64`;

    const greaterThan = `console.log(5 > 3);
    // Expected output: true
    
    console.log(3 > 3);
    // Expected output: false
    
    // Compare bigint to number
    console.log(3n > 5);
    // Expected output: false
    
    console.log('ab' > 'aa');
    // Expected output: true`;

    const lessThan = `console.log(5 < 3);
    // Expected output: false
    
    console.log(3 < 3);
    // Expected output: false
    
    // Compare bigint to number
    console.log(3n < 5);
    // Expected output: true
    
    console.log('aa' < 'ab');
    // Expected output: true`;

    const greaterThanEqual = `console.log(5 >= 3);
    // Expected output: true
    
    console.log(3 >= 3);
    // Expected output: true
    
    // Compare bigint to number
    console.log(3n >= 5);
    // Expected output: false
    
    console.log('ab' >= 'aa');
    // Expected output: true`;

    const lessThanEqual = `console.log(5 <= 3);
    // Expected output: false
    
    console.log(3 <= 3);
    // Expected output: true
    
    // Compare bigint to number
    console.log(3n <= 5);
    // Expected output: true
    
    console.log('aa' <= 'ab');
    // Expected output: true`;

    const and = `const a = true;

    const b = false;
    
    console.log(a && b); 
    // Expected output: false
    
    console.log(a && !b); 
    // Expected output: true`;

    const or = `const a = true;

    const b = false;
    
    console.log(a || b); 
    // Expected output: true
    
    console.log(!a || b); 
    // Expected output: false`;

    return (
        <div className='operator-container'>
            <h1 className='large-title'>Common Operators</h1>
            <div>
                <div className='operator' id='addition'>
                    <h2 className='medium-title'>Addition (+)</h2>
                    <p>The addition operator produces the sum of numeric operands or string concatenation.</p>
                    <CodeBlock text={addition} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='increment'>
                    <h2 className='medium-title'>Increment (++)</h2>
                    <p>The increment operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.</p>
                    <CodeBlock text={increment} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='subtraction'>
                    <h2>Subtraction (-)</h2>
                    <p>The subtraction operator subtracts the two operands, producing their difference.</p>
                    <CodeBlock text={subtraction} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='decrement'>
                    <h2 className='medium-title'>Decrement (--)</h2>
                    <p>The decrement operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.</p>
                    <CodeBlock text={decrement} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='multiplication'>
                    <h2>Multiplication (*)</h2>
                    <p>The multiplication operator produces the product of the operands.</p>
                    <CodeBlock text={multiplication} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='division'>
                    <h2>Division (/)</h2>
                    <p>The divison operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.</p>
                    <CodeBlock text={division} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='assignment'>
                    <h2 className='medium-title'>Assignment (=)</h2>
                    <p>The assignment operator is used to assign a value to a variable or property. The assignment expression itself has a value, which is the assigned value. This allows multiple assignments to be chained in order to assign a single value to multiple variables.</p>
                    <CodeBlock text={assignment} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='equality'>
                    <h2 className='medium-title'>Equality (==)</h2>
                    <p>The equality operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.</p>
                    <CodeBlock text={equality} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='strict-equality'>
                    <h2 className='medium-title'>Strict Equality (===)</h2>
                    <p>The strict equality operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.</p>
                    <CodeBlock text={strictEquality} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='exponentiation'>
                    <h2 className='medium-title'>Exponentiation (**)</h2>
                    <p>The exponentiation operator returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow(), except it also accepts BigInts (Ex. 3n) as operands.</p>
                    <CodeBlock text={exponentiation} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='greater-than'>
                    <h2 className='medium-title'>Greater Than {'(>)'}</h2>
                    <p>The greater than operator returns true if the left operand is greater than the right operand, and false otherwise.</p>
                    <CodeBlock text={greaterThan} language='javascript' className='codeblock'/>
                </div>
                <div className='operator'>
                    <h2 className='medium-title' id='less-than'>Less Than {'(<)'}</h2>
                    <p>The less than operator returns true if the left operand is less than the right operand, and false otherwise.</p>
                    <CodeBlock text={lessThan} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='greater-than-or-equal-to'>
                    <h2 className='medium-title'>Greater Than or Equal To {'(>=)'}</h2>
                    <p>The greater than or equal operator returns true if the left operand is greater than or equal to the right operand, and false otherwise.</p>
                    <CodeBlock text={greaterThanEqual} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='less-than-or-equal-to'>
                    <h2 className='medium-title'>Less Than or Equal To {'(<=)'}</h2>
                    <p>The less than or equal operator returns true if the left operand is less than or equal to the right operand, and false otherwise.</p>
                    <CodeBlock text={lessThanEqual} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='and'>
                    <h2 className='medium-title'>And (&&)</h2>
                    <p>This operator returns true if both the operands are true. If any one of the operands is false, it returns false.</p>
                    <CodeBlock text={and} language='javascript' className='codeblock'/>
                </div>
                <div className='operator' id='or'>
                    <h2 className='medium-title'>Or (||)</h2>
                    <p>This operator returns true if at least one of the operands is true. If both the operands are false, it returns false.</p>
                    <CodeBlock text={or} theme='dracula' language='javascript' className='codeblock'/>
                </div>
            </div>
        </div>
    );
}

{/* <div className='operator' id=''>
    <h2 className='medium-title'></h2>
    <p></p>
    <CodeBlock text={} language='javascript' className='codeblock'/>
</div> */}

export default Operators;