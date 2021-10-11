import widgets from "./widgets.hbs";
import "./style.css";

export function initialize() {
    const html = widgets({
        name: "danish",
        age: "37",
    });
    console.warn(html);
}

$(document).ready(function() {
    initialize();
});