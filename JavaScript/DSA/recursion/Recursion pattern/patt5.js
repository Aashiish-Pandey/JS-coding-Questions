function fun(n, path) {

    if (n === 0) {
        console.log([...path]);
        return;
    }

    path.push(n);

    fun(n - 1, path);

    path.pop();

    fun(n - 1, path);
}

fun(2, []);