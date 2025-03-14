const express = require('express');
const { spawn } = require('child_process');
const shell = '/bin/bash';
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const port = 3001;

// Utility function to execute npm run commands
const runCommand = (script, res) => {
  let stdoutData = '';
  let stderrData = '';

  const child = spawn(script, [], { cwd: `${process.env.HOME}/Starknet-ERC20-Deployer`, shell: shell });

  child.stdout.on('data', (data) => {
    stdoutData += data;
    console.log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    stderrData += data;
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    if (code !== 0) {
      console.error(`Command exited with code ${code}`);
      return res.status(500).json({ success: false, error: `Command exited with code ${code}`, stderr: stderrData });
    }
    res.json({ success: true, output: stdoutData });
  });

  child.on('error', (err) => {
    console.error('Failed to start subprocess.', err);
    return res.status(500).json({ success: false, error: `Failed to start subprocess: ${err}` });
  });
};

app.post('/configure', (req, res) => {
  const mFlag = req.query.m ? `-m ${req.query.m}` : '';
  const oFlag = req.query.o ? `-o ${req.query.o}` : '';

  const command = `npm run configure --silent -- ${mFlag} ${oFlag}`.trim();
  console.log("Executing command:", command);

  runCommand(command, res);
});

app.post('/deploy', (req, res) => runCommand('npm run deploy', res));
app.get('/upgradeContract', (req, res) => runCommand('upgradeContract', res));
app.get('/verify', (req, res) => runCommand('verify', res));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});