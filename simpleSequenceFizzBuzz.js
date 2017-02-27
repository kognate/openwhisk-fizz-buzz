var openwhisk = require('openwhisk');

var main = args => {
    let ow = openwhisk();
    return new Promise((resolve, reject) => {

        let res = args.range.map((item) => {
            return ow.actions.invoke({actionName: 'fizzBuzz',
                                      blocking: false,
                                      params: { number: item }});
        });

        Promise.all(res).then(values => {
            resolve({activations: values.map((item) => item.activationId)});
        });
    });
}
