function printString(str) {
  let ip = str.slice(1);
  let op = str[0];
  solve(op, ip);
}

function solve(op, ip) {
  if (!ip) {
    console.log(op);
    return;
  }

  solve(op + ip[0], ip.slice(1)) + solve(op + " " + ip[0], ip.slice(1));
}

printString("ABC");
