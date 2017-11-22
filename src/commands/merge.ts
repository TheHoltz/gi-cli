import { Arguments } from 'yargs';
import * as git from 'simple-git/promise';

const pullRequestCommand = async (
  command: string,
  project: any,
  args: Arguments,
  authToken: string,
) => {
  const repository = git(process.cwd());
  const status = await repository.status();

  const branchName = status.current;
  const projectUrl = `https://github.com/${project.scope}/${project.name}`;
  const url = `${projectUrl}/compare/master...${branchName}`;

  console.log(url);
};

export default pullRequestCommand;
