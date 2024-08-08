// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     size() {
//         return this.heap.length;
//     }

//     swap(idx1, idx2) {
//         // 배열분해할당으로 스왑
//         [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
//     }

//     add(object) {
//         this.heap.push(object)
//         this.bubbleUp()
//     }

//     bubbleUp() {
//         let curIdx = this.size()-1;
//         let parIdx = ((curIdx-1) / 2) >> 0
//         while(this.heap[parIdx] && this.heap[curIdx][1]< this.heap[parIdx][1]) {
//             this.swap(parIdx, curIdx)
//             curIdx = parIdx
//             parIdx = ((curIdx-1) / 2) >> 0
//         }
//     }

//     poll() {
//         if(this.size() === 0) {
//             return undefined
//         }

//         if(this.size() === 1) {
//             return this.heap.pop();
//         }

//         const value = this.heap[0];
//         this.heap[0] = this.heap.pop();

//         this.bubbleDown()

//         return value
//     }

//     bubbleDown() {
//         let parIdx = 0;
//         let leftChildIdx = parIdx*2 + 1;
//         let rightChildIdx = parIdx*2 + 2;

//         while(
//             (this.heap[leftChildIdx] !== undefined && this.heap[leftChildIdx][1] < this.heap[parIdx][1])
//             || (this.heap[rightChildIdx] !== undefined && this.heap[rightChildIdx][1] < this.heap[parIdx][1])
//         ) {
//             let smallIdx = leftChildIdx
//             if(this.heap[rightChildIdx][1] < this.heap[leftChildIdx][1]){
//                 smallIdx = rightChildIdx
//             }

//             this.swap(smallIdx, parIdx)

//             parIdx = smallIdx
//             leftChildIdx = parIdx*2 + 1;
//             rightChildIdx = parIdx*2 + 2;
//         }

//     }

// }

// function calculate(totalTime, nowTime, job) {
//     let calculateTime = nowTime + job[1] - job[0]
//     totalTime += calculateTime
//     nowTime += job[1]
//     return [totalTime, nowTime]
// }

// function solution(jobs) {
//     let arrangeJobs = [...jobs].sort((a,b) => a[0] - b[0] || a[1] - b[1]);
//     let shiftValue = arrangeJobs.shift();

//     let nowTime = shiftValue[0] + shiftValue[1];
//     let totalTime = shiftValue[1];
//     let minHeap = new MinHeap();
//     let minHeapPoll = []

//     while(true) {
//         if(arrangeJobs.length === 0) {
//             if(minHeap.size) {
//                 for(let tmp of minHeap.heap) {
//                     const [to, no] = calculate(totalTime, nowTime, tmp)
//                     totalTime = to
//                     nowTime = no
//                 }
//             }
//             break;
//         }

//         while(arrangeJobs[0]!== undefined && arrangeJobs[0][0] <= nowTime) {
//             minHeap.add(arrangeJobs.shift());
//         }
        
//         if(minHeap.size() !== 0) {
//             minHeapPoll = minHeap.poll()
//             const [to, no] = calculate(totalTime, nowTime, minHeapPoll)
//             totalTime = to
//             nowTime = no
//         } else {
//             nowTime=arrangeJobs[0][0] !== undefined ? arrangeJobs[0][0] : nowTime
//         }
//     }

//     return totalTime/jobs.length >> 0;
// }

function solution(jobs) {
    var answer = 0;
    let index = 0;
    let now = 0;
    let sum = 0;
    const length = jobs.length;
    
    jobs.sort((a, b) => a[0]- b[0]);
    
    const waiting = [];
    
    while (index < jobs.length || waiting.length > 0) {
        if (index < jobs.length && now >= jobs[index][0]) {
            waiting.push(jobs[index]);
            index += 1;
            
            waiting.sort((a, b) => a[1] - b[1]);
            continue;
        }
        if (!waiting.length) {
            now = jobs[index][0];
        } else {
            const first = waiting.shift();
            sum += now - first[0] + first[1];
            
            now += first[1];
        }
    }
    
    answer = Math.floor(sum / length);
    
    return answer;
}

module.exports = solution;