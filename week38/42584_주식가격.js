function solution(prices) {   
    const arr = []
    for(let i = 0; i < prices.length - 1; i++) {
        let answer = 0
        
        for(let j = i + 1; j < prices.length; j++) {
            answer++
            
            if(prices[i] > prices[j]) {
                break
            }
        }
        
        arr.push(answer)
    }

    arr.push(0)
    return arr
}