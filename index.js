module.exports = {
  FizzBuzz: (num) => {
    let results = ""
    if (num % 3 == 0) results += 'Fizz'
    if (num % 5 == 0) results += 'Buzz'
    return results.length ? results : num
  }
}