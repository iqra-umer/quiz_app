#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log('\n************************\n');
console.log(chalk.bgYellow.italic('<<<<< QUIZ BY IQRA >>>>>'));
console.log('\n************************\n');

let correctCount:number = 0;
let incorrectCount = 0;

let answer= await inquirer.prompt([
    {
        name: 'quiz',
        type: 'list',
        message: chalk.greenBright('1. Which of the following are primitive data types in TypeScript?'),
        choices: ['a. Numbers, strings, arrays',
                  'b. Numbers, strings, booleans',
                  'c. Objects, functions, null']
    }
])
if(answer.quiz === 'b. Numbers, strings, booleans'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"));
    correctCount++;
}else{console.log(chalk.red('YOUR ANSWER IS INCORRECT!!! THE RIGHT ANSWER IS b'))};
console.log('-----------------------------------------------------------');


let answer2= await inquirer.prompt([
    {
        name: 'quiz2',
        type: 'list',
        message: chalk.yellowBright('2)What is the purpose of the (any) data type in TypeScript?'),
        choices: ['a. It enforces strict typing rules',
                  'b. It restricts the type of data that can be stored in a variable',
                  'c. It allows for flexibility but compromises safety']
    }
])
if(answer2.quiz2 === 'c. It allows for flexibility but compromises safety'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS c`))
    incorrectCount++;};
    console.log('-------------------------------------------------');
    

let answer3= await inquirer.prompt([
    {
        name: 'quiz3',
        type: 'list',
        message: chalk.green("3)When is the 'bigint' data type used in TypeScript?"),
        choices: ['a. For handling large numerical values',
                  'b. For storing boolean values',
                  'c. For defining complex objects']
    }
])
if(answer3.quiz3 === 'a. For handling large numerical values'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS a`))
    incorrectCount++;};
    console.log('-------------------------------------------------');
    
let answer4= await inquirer.prompt([
    {
        name: 'quiz4',
        type: 'list',
        message: chalk.yellowBright('4) Which of the following is NOT a primitive data type in TypeScript?'),
        choices: ['a. number',
                  'b. array',
                  'c. boolean']
    }
])

if(answer4.quiz4 === 'b. array'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS b`))
    incorrectCount++};
    console.log('-------------------------------------------------');

let answer5= await inquirer.prompt([
    {
        name: 'quiz5',
        type: 'list',
        message: chalk.green('5) In TypeScript, what is the data type used for representing a collection of key-value pairs?'),
        choices: ['a. object',
                  'b. list',
                  'c. array']
    }
])
if(answer5.quiz5 === 'a. object'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS a`))
    incorrectCount++;};
    console.log('-------------------------------------------------');


let answer6= await inquirer.prompt([
    {
        name: 'quiz6',
        type: 'list',
        message: chalk.yellowBright('6) What is the data type of the value NaN in TypeScript?'),
        choices: ['a. NaN is not a valid data type',
                  'b. string',
                  'c. number']
    }
])
if(answer6.quiz6 === 'c. number'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS c`))
    incorrectCount++;};
    console.log('-------------------------------------------------');


let answer7= await inquirer.prompt([
    {
        name: 'quiz7',
        type: 'list',
        message: chalk.green('7) What is the data type of the value Infinity in TypeScript?'),
        choices: ['a. string',
                  'b. number',
                  'c. Infinity is not a valid data type']
    }
])
if(answer7.quiz7 === 'b. number'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS b`))
    incorrectCount++;};
    console.log('-------------------------------------------------');

let answer8= await inquirer.prompt([
    {
        name: 'quiz8',
        type: 'list',
        message: chalk.yellow('8) What is a module in TypeScript?'),
        choices: ['a. A data type',
                  'b. A function',
                  'c. A way to organize code into separate pieces']
    }
])
if(answer8.quiz8 === 'c. A way to organize code into separate pieces'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS c`))
    incorrectCount++;};
    console.log('-------------------------------------------------');

let answer9= await inquirer.prompt([
    {
        name: 'quiz9',
        type: 'list',
        message: chalk.green('9) How does TypeScript handle code reuse with modules?'),
        choices: ['a. By providing a built-in code sharing mechanism',
                  'b. By using the import and export keywords',
                  'c. By automatically importing relevant code snippets']
    }
])
if(answer9.quiz9 === 'b. By using the import and export keywords'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS b`))
    incorrectCount++;};
    console.log('-------------------------------------------------');

let answer10= await inquirer.prompt([
    {
        name: 'quiz10',
        type: 'list',
        message: chalk.yellowBright('10) Which TypeScript configuration file is commonly used to specify module-related settings?'),
        choices: ['a. node_modules ',
                  'b. package.json',
                  'c. tsconfig.json']
    }
])
if(answer10.quiz10 === 'c. tsconfig.json'){
    console.log(chalk.bgBlue("YOUR ANSWER IS CORRECT"))
    correctCount++;
}else{console.log(chalk.red(`YOUR ANSWER IS INCORRECT!!! THE CORRECT ANSWER IS c`))
    incorrectCount++;};
    console.log('-------------------------------------------------');

    console.log(chalk.italic('Quiz Summary'));
    console.log(chalk.green.underline(`Correcr Answer: ${correctCount}`));
    console.log(chalk.yellowBright.underline(`Incorrect Answer: ${incorrectCount}`));
    console.log("------------------------------------------------");
    
    
    
    

