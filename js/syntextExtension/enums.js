"use strict";
const StatusCodes = {
    InternalServerError: 500,
    NotFound: 404,
    Ok: 200,
    // ...
};
StatusCodes.InternalServerError;
let statusCodeValue;
statusCodeValue = 200;
// Ok
// statusCodeValue = -1;
// Error: Type '-1' is not assignable to type 'StatusCodeValue'.
var VisualTheme;
(function (VisualTheme) {
    VisualTheme[VisualTheme["Dark"] = 0] = "Dark";
    // 0
    VisualTheme[VisualTheme["Light"] = 1] = "Light";
    // 1
    VisualTheme[VisualTheme["System"] = 2] = "System";
    // 2
})(VisualTheme || (VisualTheme = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Top"] = 1] = "Top";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Bottom"] = 3] = "Bottom";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (Direction = {}));
var LoadStyle;
(function (LoadStyle) {
    LoadStyle["AsNeeded"] = "as-needed";
    LoadStyle["Eager"] = "eager";
})(LoadStyle || (LoadStyle = {}));
var Wat;
(function (Wat) {
    Wat["FirstString"] = "first";
    Wat[Wat["SomeNumber"] = 9000] = "SomeNumber";
    Wat[Wat["ImplicitNumber"] = 9001] = "ImplicitNumber";
    // Ok (value 9001)
    Wat["AnotherString"] = "another";
    // NotAllowed,
    // Error: Enum member must have initializer.
})(Wat || (Wat = {}));
let displayHint = 2 /* DisplayHint.Transparent */;
