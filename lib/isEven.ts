function isEven(num: number): boolean {
  // your code here
  if (num === 0) return true;
  console.log("num: ", num);
  console.log("mod: ", num % 2);
  return num % 2 === 0 ? true : false;
}
