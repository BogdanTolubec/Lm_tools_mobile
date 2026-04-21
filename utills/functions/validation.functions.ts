import React from "react"

export function isNumberPositive(number: number){
    return number >= 0 ? number : 0
}

export function validateInputTypeNumber( input: string, minValue: number, maxValue: number, 
    setStateFunction: React.Dispatch<React.SetStateAction<string>> ): void {
    const validatedInput = input.trim();

    if (validatedInput === "") {
        setStateFunction("");
        return;
    }

    if (!/^\d+$/.test(validatedInput)) {
        return;
    }

    if (validatedInput.length > 1 && validatedInput.startsWith("0")) {
        return;
    }

    const numberInput = Number(validatedInput);

    if (!Number.isFinite(numberInput)) {
        return;
    }

    if (numberInput < minValue || numberInput > maxValue) {
        return;
    }

    setStateFunction(validatedInput);
}

export const validateInputStringBySymbols = (value: string, setStateFunction: React.Dispatch<React.SetStateAction<string>>,) => { // string validation on special symbols

    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(!format.test(value)){
        setStateFunction(value)
    }
    else{
        setStateFunction("")
    }
}