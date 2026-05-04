import { minutesInDay } from "../consts"
import { daysToSeconds, hoursToSeconds, minutesInHour, secondsInMinutes, secondsToDays, secondsToHours, secondsToMinutes } from "./timeConvertFunctions"

export function userFriendlyBigNumbersVisualisation(number: number): string{
    if(!number){
        return "0"
    }

    number = Math.round(number)

    let i: number = number.toString().length
    let numberLength: number = number.toString().length
    let result: string = ""

    while(i > 0){
        if((numberLength - i) % 3 === 0 && i !== numberLength) //if it"s a 3rd iteration we add "."
        {
            result += "."
        }

        result += number.toString()[i-1]

        i--
    }

    return result.split("").reverse().join("") //reverses string
}

export function timeConverterFromSecondsToStringInDaysHoursMinutesFormat(timeInSeconds: number): string{
    const daysCount: number = Math.floor(secondsToDays( timeInSeconds ))
    const hoursCount: number = Math.floor(secondsToHours( timeInSeconds - daysToSeconds(daysCount) ))
    const minutesCount: number = Math.floor(secondsToMinutes( timeInSeconds - daysToSeconds(daysCount) - hoursToSeconds(hoursCount) ))

    return `${daysCount}d ${hoursCount}h ${minutesCount}m `
}

export function firstLetterCapitalizer(string: string): string{
    if(!string)
    return ""

    if(string.length < 1)
    return ""

    return string[0].toUpperCase() + string.slice(1)
}

export function speedUpValueUserFriendlyVisualisation(timeInMinutes: number): string{
    if(timeInMinutes >= 0 && timeInMinutes <= 60)
        return timeInMinutes + " m"

    if(timeInMinutes > 60 && timeInMinutes <= minutesInDay)
        {
            if(timeInMinutes % minutesInHour !== 0) return (timeInMinutes / minutesInHour).toFixed(2) + " h"
            else return timeInMinutes / minutesInHour + " h"
        }
            

    if(timeInMinutes > minutesInDay && timeInMinutes <= minutesInDay * 3)
        {
            if(timeInMinutes % minutesInDay !== 0) return (timeInMinutes / minutesInDay).toFixed(2) + " d"
            else return timeInMinutes / minutesInDay + " d"
        }

    return ""
}

export function numbersUpToTrillionReducer(value: number): string{
    if(!value) return "0"
    if(typeof(value) !== "number") return "0"
    if(value < 0) return "0"

    if(value < 1_000) return value.toFixed(0).toString()
    if(value >= 1_000 && value < 1_000_000) return (value / 1_000).toFixed(1).toString() + "K"
    if(value >= 1_000_000 && value < 1_000_000_000) return (value / 1_000_000).toFixed(1).toString() + "M"
    if(value >= 1_000_000_000 && value < 1_000_000_000_000) return (value / 1_000_000_000).toFixed(1).toString() + "B"
    if(value >= 1_000_000_000_000 && value < 1_000_000_000_000_000) return (value / 1_000_000_000_000).toFixed(1).toString() + "T"

    return "Error"
}