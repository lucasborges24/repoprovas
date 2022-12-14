export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE_URL: string;
      JWT_SECRETKEY: string;
      CRYPTR_KEY: string;
    }
  }
}
