function checkAge(age){
    if(age < 18){
        const message = "Sorry, you are not old enough to drive this car. Powering off";
    }else{
        const message = "Powering On. Enjoy the ride!";

    }
    return message;
}
console.log(checkAge(21));
 //?

 The code you provided has a scope issue. The message variable is declared inside the if and else blocks using const, which makes it block-scoped. Therefore, it is not accessible outside those blocks.