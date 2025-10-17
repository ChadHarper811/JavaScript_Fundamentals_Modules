import chalk from 'chalk';

export const logObject = (obj) => {
    Object.entries(obj).forEach(entry => {
        console.log(`${chalk.blue(entry[0])}: ${chalk.gray(entry[1])}`);
    });
}