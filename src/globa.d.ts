declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const content: string;
    export default content;
}