let flavours = ["choco", "vanilla", "orange", "coffee"]
let [first, ...rest] = flavours

console.log(rest.join(", "))

let peaks = ["Tallac", "Ralston", "Rose"]
let canyons = ["Ward", "Blackwood"]
let place = [...peaks, ...canyons]

console.log(place)
