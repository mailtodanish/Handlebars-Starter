const path = require("path");
module.exports = {
    mode: "production",
    entry: "./src/index.js",

    //loader
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }, ],
    },
};