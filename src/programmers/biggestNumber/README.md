## 알게 된 점
- map을 쓸 때는 {}이 아니라 ()을 써야된다.
    - array.map((item) => {console.log(item)}) (x)
    - array.map((item) => (console.log(item))) (o)
- array에 내장된 sort는 문자로 변환해서 정렬을 한다. 따라서 숫자를 정렬하고 싶을 때는 다음처럼 해야한다.
    - array.sort((a,b) => a-b) (오름차순)