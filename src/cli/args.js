export const parseArgs = () => {
  const userInputArgs = process.argv.slice(2);
  const cliArgument = userInputArgs.reduce((acc, arg, index, arr) => {
    const valueCandidate = arr[index + 1];
    if (valueCandidate && arg.startsWith("--")) {
      const transformArgs = arg.slice(2);
      const cliArgumentTransformed = `${transformArgs} is ${valueCandidate}`;
      acc.push(cliArgumentTransformed);
    }
    return acc;
  }, []);
  console.log(cliArgument.join(", "));
};
parseArgs();
