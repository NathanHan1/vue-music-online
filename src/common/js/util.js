function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let temp = _arr[j]
        _arr[j] = _arr[i]
        _arr[i] = temp
    }
    return _arr
}

// 节流函数(函数坷里化)
export function debounce(func, delay) {
    let timer

    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }