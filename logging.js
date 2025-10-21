import chalk from 'chalk';

export let numEmployeesLogged = 0;

export const logObject = (obj) => {
    Object.entries(obj).forEach(entry => {
        console.log(`${chalk.blue(entry[0])}: ${chalk.gray(entry[1])}`);
    });
    ++numEmployeesLogged;
}