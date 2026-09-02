const arr = [3, 1];

const printSubsequence = (index, ds) => {

  debugger

    if (index === arr.length) {
        console.log([...ds]);
        return;
    }


    // Take
    ds.push(arr[index]);
    debugger
 
    printSubsequence(index + 1, ds);


    // Backtrack
    ds.pop();
    debugger

    // Not Take
    printSubsequence(index + 1, ds);

}

printSubsequence(0, []);