function fun(n){

    if(n==0)
        return;

    console.log("Start",n);

    fun(n-1);

    console.log("Middle",n);

    fun(n-1);

    console.log("End",n);

}

fun(2);