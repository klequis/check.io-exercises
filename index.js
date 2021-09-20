const log = console.log;

function isLetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

const valsToClean = [, ",", "", "."];

// const a = [" ", "a", " ", "w", "o", "r", "d", " ", ""].map((x) => isLetter(x));
// log(a);

// const h1 = "Hello.world";
const h1 = " a word ";
const h2 = h1.split("");
log("h2: ", h2);
const c1 = h2.map((l, idx, arr) => {
  if (!isLetter(l)) {
    if (idx === 0 || idx === arr.length - 1) {
      return "";
    }
    if (isLetter(arr[idx - 1]) && isLetter(arr[idx + 1])) {
      // log("arr[idx - 1]: ", arr[idx - 1]);
      return " ";
    }
  }
  return l;
});
log("c1: ", c1);

const c2 = c1.join("");
log("c2: ", c2);
