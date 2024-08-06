function solution(phone_book) {
    // 정렬
    phone_book.sort()

    // 로직
    for(let i=0; i<phone_book.length-1; i++) {
        if (phone_book[i+1].startsWith(phone_book[i])) {
            return false
        }
    }
    return true;
}

module.exports = solution;