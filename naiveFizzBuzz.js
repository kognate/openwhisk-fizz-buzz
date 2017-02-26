var buildRange = (args) => {
 let fromNumber = args.from;
 let toNumber = args.to;
 let range = [...Array(1 + (toNumber - fromNumber)).keys()].map((n) => n + fromNumber)
 return { range: range };
}

var fizzBuzz = args => {
 let item = args.number;
 if (item == 0) { return { result: item }} 
 else if (item % 5 == 0 && item % 3 == 0) { return {result: 'FizzBuzz' }}
 else if (item % 3 == 0) { return { result: 'Fizz' } }
 else if (item % 5 == 0) { return { result: 'Buzz' } }
 else { return { result: item } }
}


var main = args => {
  let range = buildRange(args).range;
  let result = range.map((item) => fizzBuzz({number: item}).result);
  return { result };
}
