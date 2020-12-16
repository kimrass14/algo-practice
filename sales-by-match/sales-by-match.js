

function sockMerchant(n, ar) {
    let pairs = 0
    ar.sort()
    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i+1]) {
            pairs++;
            i++
        }
    }
    return pairs

}
console.log(sockMerchant(5, [1,2,3,1,2]))