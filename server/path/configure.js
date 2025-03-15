module.exports = function(app, ){
  app.post("/configure",(req, res ) => {
      
      const { spawn } = require('child_process');
      const shell = '/bin/bash';

      const runConfigureCommand = (script, res) => {
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
        
        const mFlag = req.query.m ? `-m ${req.query.m}` : '';
        const oFlag = req.query.o ? `-o ${req.query.o}` : '';
      
        const command = `npm run configure --silent -- ${mFlag} ${oFlag}`.trim();
        console.log("Executing command:", command);
      
        runConfigureCommand(command, res);

        
  });
}