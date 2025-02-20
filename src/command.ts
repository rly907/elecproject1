import { exec } from 'child_process';

export function runPowerShellCommand(command: string): void {
    exec(`pwsh -Command "${command}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}

// Example of running a PowerShell command
// runPowerShellCommand('notepad');