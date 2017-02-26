var openwhisk = require('openwhisk');
var main = args => {
    var ow = openwhisk();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let res = args.activations.map((item) => {
                return new Promise((aresolve, areject) => {
                    ow.activations.get({activation: item})
                    .then(act_data => aresolve(act_data))
                    .catch(err => areject({errora: err, item: item}));
                });
            });
            Promise.all(res).then(values => {
                resolve({"final": values.map((item) => item.response.result.result)});
            }).catch(err => reject({error: err}));
        },3000);
});
}
