const path = require("path");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js",
    },
    //loader
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"],
            },
        ],
    },
};