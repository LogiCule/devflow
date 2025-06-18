import pino from "pino";

const isEdge = process.env.EDGE_RUNTIME === "edge";
const isProd = process.env.NODE_ENV === "production";
const transport =
  !isEdge && !isProd
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          ignore: "pid,hostname",
          translateTime: "SYS:standard",
        },
      }
    : undefined;
const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport,
  formatters: {
    level: (label) => ({ level: label.toUpperCase() }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
