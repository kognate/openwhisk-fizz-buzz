var buildRange = (args) => {
 let fromNumber = args.from;
 let toNumber = args.to;
 let range = [...Array(1 + (toNumber - fromNumber)).keys()].map((n) => n + fromNumber)
 return { range: range };
}
