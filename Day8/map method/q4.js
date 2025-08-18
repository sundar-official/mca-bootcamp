let timestamps = [1630488000000, 1631179200000, 1633708800000];
let formattedTimes = timestamps.map((ts) => new Date(ts).toLocaleTimeString());

console.log(formattedTimes);