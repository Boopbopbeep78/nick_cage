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
