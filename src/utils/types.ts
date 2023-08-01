/* Helper to convert a string from kebab case to camel case */
export type KebabToCamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${KebabToCamelCase<P3>}`
    : Lowercase<S>

/* An alignment */
export type Alignment = 
    | 'center'
    | 'top'  | 'bottom'
    | 'left' | 'right'
    | `${'top' | 'bottom'}-${'left' | 'right'}`