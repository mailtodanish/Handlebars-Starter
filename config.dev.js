const Path = require("path");
module.exports = {
    mode: "production",
    entry: Path.resolve(__dirname, "src/index.js"),

    //loader
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.hbs$/,

                loader: "handlebars-loader",
                options: {
                    runtime: Path.resolve(__dirname, "src/handler.js"),
                },
            },
        ],
    },
};