import chalk from "chalk";

export type ErrorLog = {
	title: string;
	message: string;
	error?: Error | unknown;
};

export type InfoLog = {
	title?: string;
	message: string;
};

export const logError = ({ title, message, error }: ErrorLog) => {
	console.error(
		`${chalk.red.bold(`\n- [${title}]`)}: ${chalk.bold(`${message}\n${error}`)}`,
	);
	if (error) {
		return console.error(error);
	}
};

export const logWarning = ({ title, message, error }: ErrorLog) => {
	console.warn(
		`${chalk.yellow.bold(`\n- [${title}]`)}: ${chalk.bold(`${message}\n${error}`)}`,
	);
	if (error) {
		return console.warn(error);
	}
};

export const logInfo = ({ title, message }: InfoLog) => {
	return console.log(chalk.bold(`\n- ${title && `[${title}]: `}${message}\n`));
};

export const logSuccess = ({ title, message }: InfoLog) => {
	if (title) {
		return console.log(
			`${chalk.green.bold(`\n- [${title}]`)}: ${chalk.bold(`${message}\n`)}`,
		);
	}
	return console.log(chalk.bold(chalk.green.bold(`${message}\n`)));
};
