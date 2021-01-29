function getGreeting() {
    let userName = prompt('Do you think hes really crazy or is it all an act?: ');
    console.log(userName);

if (userName == 'Yes') {
    document.write('You might be right!!');
} 
else if (userName != 'Yes') {
    document.write('Are You sure???');
}
}
getGreeting();


function guessingGame(){
    // Got random code from w3schools
    let numberOfGuesses = 6
    let correctAnswer = 111
    console.log(correctAnswer);
    let userAnswer = askUserQuestion();
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('You are Right!');
            break;
        } else if (userAnswer < correctAnswer){
            alert('More Than That.  Try again.')
        } else if (userAnswer > correctAnswer){
            alert('Not That Many. Try again.')
        }
        userAnswer = askUserQuestion();
    }
    if(userAnswer != correctAnswer){
        alert('Thank you for playing')
    }
}

function askUserQuestion(){
    let userAnswer = -1
    while(userAnswer < 1 || userAnswer > 111){
        userAnswer = prompt('How many movies has Nick Cage been in?');
    }
    return userAnswer;
}

        function imagesOnScreen(){
    userAnswer = prompt('How many Nick Cages is enough?');
    
    for (let i =0; i < userAnswer;i++){
            document.write('<img src=https://www.placecage.com/g/200/300>')
            }
    }