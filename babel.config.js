process.env.EXPO_ROUTER_APP_ROOT = "../../src/App";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
