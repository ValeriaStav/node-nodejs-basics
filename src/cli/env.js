const parseEnv = () => {
  const envVars = [];
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      envVars.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(envVars.join("; "));
};

parseEnv();
