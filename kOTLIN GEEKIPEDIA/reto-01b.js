
setInterval(() => console.log('Hi'), 1000);

let counter = 0;
setInterval(() => {
  console.log('Hi', counter);
  counter++;
}, 10);