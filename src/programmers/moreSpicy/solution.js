class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(idx1, idx2) {
        // 배열분해할당으로 스왑
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }

    add(value) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let curIdx = this.size()-1;
        let parIdx = ((curIdx-1) / 2) >> 0
        while(this.heap[parIdx] && this.heap[curIdx]< this.heap[parIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx
            parIdx = ((curIdx-1) / 2) >> 0
        }
    }

    poll() {
        if(this.size() === 0) {
            return undefined
        }

        if(this.size() === 1) {
            return this.heap.pop();
        }

        const value = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.bubbleDown()

        return value
    }

    bubbleDown() {
        let parIdx = 0;
        let leftChildIdx = parIdx*2 + 1;
        let rightChildIdx = parIdx*2 + 2;

        while(
            (this.heap[leftChildIdx] !== undefined && this.heap[leftChildIdx] < this.heap[parIdx])
            || (this.heap[rightChildIdx] !== undefined && this.heap[rightChildIdx] < this.heap[parIdx] )
        ) {
            let smallIdx = leftChildIdx
            if(this.heap[rightChildIdx] < this.heap[leftChildIdx]){
                smallIdx = rightChildIdx
            }

            this.swap(smallIdx, parIdx)

            parIdx = smallIdx
            leftChildIdx = parIdx*2 + 1;
            rightChildIdx = parIdx*2 + 2;
        }

    }

}

function solution(scoville, K) {
    let answer = 0;
    let minHeap = new MinHeap();

    if(scoville.length === 0) {
        return -1
    }

    for(let tmp of scoville) {
        minHeap.add(tmp)
    }

    while(minHeap.size() > 0) {
        let minValue = minHeap.poll();

        if(minHeap.size() === 0) {
            return minValue >= K ? answer : -1
        }

        if(minValue >= K) {
            return answer
        }

        let minNextValue = minHeap.poll();
        let newValue = minValue + (minNextValue * 2)
        minHeap.add(newValue)
        answer++;
    }
}

module.exports = solution;