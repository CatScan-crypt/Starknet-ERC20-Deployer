const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

// Utility function to execute npm run commands
const runCommand = (script, res) => {
    exec(script, { cwd: '/workspace/Starknet-ERC20-Deployer' }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${script}`, error);
            return res.status(500).json({ success: false, error: error.message, stderr });
        }
        res.json({ success: true, output: stdout });
    });
};

app.post('/configure', (req, res) => {
    const mFlag = req.query.m ? `-m ${req.query.m}` : '';
    const oFlag = req.query.o ? `-o ${req.query.o}` : '';

    const command = `npm run configure -- ${mFlag} ${oFlag}`.trim();
    console.log("Executing command:", command);

    runCommand(command, res);
});

app.get('/deploy', (req, res) => runCommand('npm run deploy', res));
app.get('/upgradeContract', (req, res) => runCommand('upgradeContract', res));
app.get('/verify', (req, res) => runCommand('verify', res));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
