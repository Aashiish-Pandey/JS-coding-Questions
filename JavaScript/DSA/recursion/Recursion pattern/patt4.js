function fun(n) {
    if (n === 0) return;

    console.log("A", n);

    fun(n - 1);

    console.log("B", n);

    fun(n - 1);

    console.log("C", n);
}

fun(2);