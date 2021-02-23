// You are given an array prices for which the ith element is the price of a given stock on day i.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//Example: Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

var maxProfit = function(prices) {

  let stockStatus = "sold"
  let stockPrice = 0
  let totalProfit = 0

  for (let i=0; i<prices.length; i++) {
    if(prices[i] < prices[i+1] && stockStatus === "sold"){
      stockStatus = "bought";
      stockPrice = prices[i]
    } else if (prices[i] > prices[i+1] && stockStatus === "bought") {
      stockStatus = "sold"
      let profit = prices[i] - stockPrice
      totalProfit += profit
    } else if (!prices[i+1] && prices[i] > stockPrice && stockStatus === "bought") {
      let profit = prices[i] - stockPrice
      totalProfit += profit
    }

  }
  return totalProfit
}
maxProfit([7,6,4,3,1])
