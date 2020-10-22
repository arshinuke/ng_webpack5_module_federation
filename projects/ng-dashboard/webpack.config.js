const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "dashboard"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      library: { type: "var", name: "dashboard" },
      filename: "remoteEntry.js",
      exposes: {
        DashboardModule: "./projects/ng-dashboard/src/app/dashboard/dashboard.module.ts",
      },
      shared: {
        "@angular/core": { eager: true },
        "@angular/common": { eager: true },
        "@angular/router": { eager: true },
      },
    }),
  ]
};
