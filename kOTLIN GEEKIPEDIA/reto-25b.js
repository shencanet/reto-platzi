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