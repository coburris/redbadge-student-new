"use strict";
let number1;
let name1;
let stringExample;
let boolExample;
let numberExample;
let unionStringNumber;
unionStringNumber = 5;
unionStringNumber = "5";
let springWeather;
springWeather = true;
springWeather = 13;
springWeather = "weather";
stringExample = "Hello";
// Type Inference
let number2 = 5;
// let number2 = "5"     <--- error
let restaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"],
};
restaurant.foodItems.forEach((item) => {
    console.log(item.toUpperCase());
});
/*
Create a function that takes 3 parameters for
buying or selling stock
-first parameter is the StockName
-second parameter is the Quantity
-third parameter is the Action - "buy-stock" or "sell-stock"
-example return  statement "You just bought 15 stocks of
Bank of America for
a total of $152"
*/
function buySellStock(stockName, qty, action) {
    let total = Number(qty) * .05;
    let status = action === "sell-stock" ? "sold" : "bought";
    return `You just ${status} ${qty} shares of ${stockName} for a total of $${total}`;
}
buySellStock("DogeCoin", 1000, "sell-stock");
let weather = {
    temp: 78,
    cloudConditions: 'sunny',
};
console.log(weather.temp);
// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemps: [81,74,79,81,81],
// };
//# sourceMappingURL=learning-ts.js.map