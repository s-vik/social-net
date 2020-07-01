export const required = (value) => {
    if(value) return undefined;
    return "this field is required";
}

export const maxLength = (maxSymbols) => {
    return (value) => {
        if(value.length > maxSymbols) return `Must be ${maxSymbols} characters or less`;
        return undefined
    }
} 
export const minLength = (minSymbols) => {
    return (value) => {
        if(value.length < minSymbols) return `Must be at least ${minSymbols}`;
        return undefined
    }
} 