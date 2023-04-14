{
  var a = 5;
}
console.log(a); // 5 -- a is accessible outside  the block ✅
{
  let b = 5;
}
console.log(b); //  ReferenceError: a is not defined ❌
{
  const c= 5;
}
console.log(c); // ReferenceError: a is not defined ❌
