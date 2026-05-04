import React from "react"

export function isNumberPositive(number: number){
    return number >= 0 ? number : 0
}

export function validateInputTypeNumber( input: string, minValue: number, maxValue: number, 
    setStateFunction: (value: string) => void ): void{
    let validatedInput = input.trim()

    if (validatedInput === "") {
        setStateFunction("")
        return
    }

    if (!/^\d+$/.test(validatedInput)) {
        return
    }

    if (validatedInput.length > 1 && validatedInput.startsWith("0")) {
        validatedInput = validatedInput.replace(/^0+/, "") || "0"
    }

    const numberInput = Number(validatedInput)

    if (!Number.isFinite(numberInput)) {
        return
    }

    if (numberInput < minValue || numberInput > maxValue) {
        return
    }

    setStateFunction(validatedInput)
}

export function validateStringReturnNumber( string: string): number{
    if (string === "") {

        return 0
    }

    if (!/^\d+$/.test(string)) {
        return 0
    }

    const number = Number(string)

    if (!Number.isFinite(number)) {
        return 0
    }

    return number
}