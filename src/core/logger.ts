import pino from "pino";
import config from "../config";

const transport = config.logPretty
  ? pino.transport({
      target: "pino-pretty",
      options: { colorize: true, translateTime: "HH:MM:ss" },
    })
  : undefined;

const logger = pino(transport ? { transport } : undefined);

export default logger;
