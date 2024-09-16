import { Module } from "module";
import pgk from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";

const { withPlugins } = pgk;

const nextConfig = {
  env: {
    MY_EMAIL: process.env.MY_EMAIL,
    MY_PASSWORD: process.env.MY_PASSWORD,
  },
  reactStrictMode: false, // to NOT render pages two times
  webpack(config) {
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };

    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false, // not show logs in prod
  },
};

Module.exports = async (phase, { defaultConfig }) =>
  withPlugins([new createNextIntlPlugin("./i18n.ts")], nextConfig)(phase, {
    ...defaultConfig,
    ...nextConfig,
  });
