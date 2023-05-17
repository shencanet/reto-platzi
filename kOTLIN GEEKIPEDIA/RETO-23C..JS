

function test() {
  let nombre = 'Alex';
  if (true) {
    console.log(nombre);
    let nombre = 'Oscar';
  }
}
console.log(test());