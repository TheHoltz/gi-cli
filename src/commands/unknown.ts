import { Arguments } from 'yargs';

const unknownCommand = async (
  command: string,
  project: any,
  args: Arguments,
  authToken: string,
) => {
  console.log(`Unkown command "${command}".`);
};

export default unknownCommand;
