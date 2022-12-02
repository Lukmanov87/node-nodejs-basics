export const parseEnv = () => {
  const resVariables = Object.entries(process.env).reduce(
    (acc, [key, value]) => {
      if (key.startsWith("RSS_")) acc.push(`${key}=${value}`);
      return acc;
    },
    []
  );
  console.log(resVariables.join("; "));
};
parseEnv();
