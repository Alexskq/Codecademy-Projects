const kelvin = 293

// The value saved to kelvin will stay constant

const celsius = kelvin - 273

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

let fahrenheit = celsius * (9/5) + 32

// Fahrenheit = Celsius * (9/5) + temperature

fahrenheit = Math.floor(fahrenheit)

// from Celsius to Fahrenheit, you often get a decimal number. Math.floor() round down the number.

console.log(`The temperature is ${fahrenheit} degree Fahrenheit`)

let newton = celsius * (33/100)

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degree Newton`)