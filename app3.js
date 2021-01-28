function hourGreet () {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Youre up late huh?';
    } else if (hourNow > 12) {
        greeting = 'Good day, sir!';
    } else if (hourNow > 0) {
        greeting = 'Top of the mornin!';
    } else {
        greeting = 'Howdy!';
        }
    document.write(greeting);
}
    
hourGreet();

