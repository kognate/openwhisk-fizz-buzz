var openwhisk = require('openwhisk');

var fizzBuzz = args => {
 let item = args.number;
 if (item == 0) { return { result: item }}
 else if (item % 5 == 0 && item % 3 == 0) { return {result: 'FizzBuzz' }}
 else if (item % 3 == 0) { return { result: 'Fizz' } }
 else if (item % 5 == 0) { return { result: 'Buzz' } }
 else { return { result: item } }
}

var main = args => {
  let ow = openwhisk();
  let name = 'numberRange'
  let blocking = true
  let params = {"from": args.from, "to": args.to};

  return new Promise((resolve, reject) => {
      ow.actions.invoke({actionName: name, blocking: blocking, params: params}).then(result => {
      let fbresult = result.response.result.range.map((item) => fizzBuzz({number: item}).result);
      resolve({result: fbresult});
  }).catch(err => reject({"message": JSON.stringify(err), "yes": 10}));
  });
}
