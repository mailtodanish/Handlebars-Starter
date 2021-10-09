Handlebars.registerHelper("formatName", function(property1, property2) {
    return new Handlebars.SafeString(`<h1>your age is ${property1}</h1>`);
});

Handlebars.registerHelper("makeBold", function(options) {
    return new Handlebars.SafeString(`<strong>${options.fn(this)}</strong>}`);
});

Handlebars.registerHelper("toLower", function(options) {
    return options.fn(this).toLowerCase();
});

var cast = {
    characters: [{
            name: "danish",
            age: "37",
        },
        {
            name: "danish1",
        },
    ],
};

$(document).ready(function() {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    $("#test").html(template(cast));
});