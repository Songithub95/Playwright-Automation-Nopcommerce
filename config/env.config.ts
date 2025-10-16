// src/config/env.config.ts
export type EnvName = "staging" | "prod";

interface EnvConfig {
  baseURL: string;
}

const ENVIRONMENTS: Record<EnvName, EnvConfig> = {
  staging: {
    baseURL: "https://demo.nopcommerce.com/",
  },
  prod: {
    baseURL: "https://nopcommerce.com/",
  },
};

// Hàm trả về baseURL tùy theo biến ENV
export function getEnvConfig(env: EnvName = (process.env.ENV as EnvName) || "staging"): EnvConfig {
  return ENVIRONMENTS[env];
}
