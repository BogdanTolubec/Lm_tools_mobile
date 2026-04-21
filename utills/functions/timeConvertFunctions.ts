export const secondsInMinutes: number = 60
export const minutesInHour: number = 60
export const hoursInDay: number = 24

//time in seconds convertion functions
export function secondsToMinutes(timeInSeconds: number): number {return timeInSeconds / secondsInMinutes}

export function secondsToHours(timeInSeconds: number): number {return secondsToMinutes(timeInSeconds) / minutesInHour}

export function secondsToDays(timeInSeconds: number): number {return secondsToHours(timeInSeconds) / hoursInDay}

//reverse functions
export function minutesToSeconds(minutesCount: number): number {return minutesCount * secondsInMinutes}

export function hoursToSeconds(hoursCount: number): number {return hoursCount * minutesInHour * secondsInMinutes}

export function daysToSeconds(daysCount: number): number {return daysCount * hoursInDay * minutesInHour * secondsInMinutes}