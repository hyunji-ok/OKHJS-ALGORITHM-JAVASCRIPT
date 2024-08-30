function solution(numbers) {
    let result = new Set();

    function getPermutation(arr, fixedNum) {
        if(arr.length >= 1) {
            for(let i=0; i<arr.length; i++){
                const newFixed = fixedNum + arr[i];
                const newArray = [...arr];
                newArray.splice(i, 1);

                if(isPrime(parseInt(newFixed))) {
                    result.add(parseInt(newFixed))
                }

                getPermutation(newArray, newFixed)
            }
        }
    }

    function isPrime(num) {
        if(num < 2) {
            return false
        }

        for(let i=2; i<=Math.sqrt(num); i++) {
            if(num%i === 0) {
                return false
            }
        }

        return true
    }

    getPermutation(numbers, '')

    return result.size;
}

module.exports = solution;