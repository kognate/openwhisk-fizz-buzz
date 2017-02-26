var fizzBuzz = args => {
 let item = args.number;
 if (item == 0) { return { result: item }} 
 else if (item % 5 == 0 && item % 3 == 0) { return {result: 'FizzBuzz' }}
 else if (item % 3 == 0) { return { result: 'Fizz' } }
 else if (item % 5 == 0) { return { result: 'Buzz' } }
 else { return { result: item } }
}


var fizzBuzzPromise = args => new Promise((resolve, reject) => {
	resolve(fizzBuzz(args));
});
