const Handlebars = require("handlebars/runtime");
Handlebars.registerHelper("loud", function(aString) {
    return aString.toUpperCase();
});

Handlebars.registerHelper("formatName", function(property1, property2) {
    return new Handlebars.SafeString(`<h1>your age is ${property1}</h1>`);
});

Handlebars.registerHelper("makeBold", function(options) {
    return new Handlebars.SafeString(`<strong>${options.fn(this)}</strong>}`);
});

Handlebars.registerHelper("toLower", function(options) {
    return options.fn(this).toLowerCase();
});

module.exports = Handlebars;