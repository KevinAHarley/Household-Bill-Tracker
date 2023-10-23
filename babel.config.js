// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            src: "./src",
            assets: "./src/assets",
            components: "./src/components",
            config: "./src/config",
            graphql: "./src/graphql",
            navigation: "./src/navigation",
            screens: "./src/screens",
            types: "./src/types",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
