const chai = require("chai")
const {
  FizzBuzz
} = require("../index")
const expect = chai.expect

describe("FizzBuzz", () => {
  it("should return 1 while given 1 as input", (done) => {
    expect(FizzBuzz(1)).to.eql(1)

    done()
  })
  it("should return 2 while given 2 as input", (done) => {
    expect(FizzBuzz(2)).to.eql(2)

    done()
  })
  it("should return 'Fizz' for multiples of 3", (done) => {
    expect(FizzBuzz(3)).to.eql('Fizz')

    done()
  })
  it("should return 'Buzz' for multiples of 5", (done) => {
    expect(FizzBuzz(5)).to.eql('Buzz')

    done()
  })
  it("should return 'Buzz' for multiples of 6", (done) => {
    expect(FizzBuzz(6)).to.eql('Fizz')

    done()
  })
  it("should return 'Buzz' for multiples of 10", (done) => {
    expect(FizzBuzz(10)).to.eql('Buzz')
    done()
  })
  it("should return 'FizzBuzz' for multiples of 15", (done) => {
    expect(FizzBuzz(15)).to.eql('FizzBuzz')
    done()
  })
})