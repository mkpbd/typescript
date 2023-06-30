const StatusCodes = {
    InternalServerError: 500,
    NotFound: 404,
    Ok: 200,
    // ...
} as const;
StatusCodes.InternalServerError;
// 500

// Type: 200 | 404 | 500
type StatusCodeValue = (typeof StatusCodes)[keyof typeof StatusCodes];
let statusCodeValue: StatusCodeValue;
statusCodeValue = 200;
// Ok
// statusCodeValue = -1;
// Error: Type '-1' is not assignable to type 'StatusCodeValue'.


enum VisualTheme {
    Dark,
    // 0
    Light,
    // 1
    System,
    // 2
}
enum Direction {
    Top = 1,
    Right,
    Bottom,
    Left,
}
enum LoadStyle {
    AsNeeded = "as-needed",
    Eager = "eager",
}


enum Wat {
    FirstString = "first",
    SomeNumber = 9000,
    ImplicitNumber,
    // Ok (value 9001)
    AnotherString = "another",
    // NotAllowed,
    // Error: Enum member must have initializer.
}



const enum DisplayHint {
    Opaque = 0,
    Semitransparent,
    Transparent,
}
let displayHint = DisplayHint.Transparent;
