const path = require('path');

module.exports = {
  entry: './app/main.ts',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src/dist/bundle.js"
  }
}