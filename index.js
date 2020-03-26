var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(1);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(1);
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(1);
  return newKittens
}















// var kittens = ["Milo", "Otis", "Garfield"] //define your array here
//
// // Add your functions and code here
// function destructivelyAppendKitten(name) {
//   kittens.push(name);
// }
//
// function destructivelyPrependKitten(name) {
//   kittens.unshift(name);
// }
//
// function destructivelyRemoveLastKitten() {
//   kittens.pop(name);
// }
//
// function destructivelyRemoveFirstKitten() {
//   kittens.shift(name);
// }
//
// function appendKitten(name) {
//   return [...kittens, name];
// }
//
// function prependKitten(name) {
//   return [name, ...kittens];
// }
//
// function removeLastKitten() {
//   return kittens.slice(0, kittens.length - 1);
// }
//
// function removeFirstKitten() {
//   return kittens.slice(1);
// }
