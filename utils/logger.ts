import fs from "fs";
import path from "path";

const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const logFile = path.join(
  logDir,
  `run-${new Date().toISOString().replace(/[:.]/g, "-")}.log`
);

function write(level: string, message: string) {
  const formatted = `[${new Date().toISOString()}] [${level}] ${message}`;
  console.log(formatted);
  fs.appendFileSync(logFile, formatted + "\n");
}

export const logger = {
  info: (msg: string) => write("INFO", msg),
  warn: (msg: string) => write("WARN", msg),
  error: (msg: string) => write("ERROR", msg),
};
