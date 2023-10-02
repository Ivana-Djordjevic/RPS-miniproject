// promt user 
//alert with computer choise
//alert winner or loser message
//alert with stats

let wins = 0;
let losses = 0;
let ties = 0;

const options =  ['R', 'P', 'S']

function playGame() {

    let userChoice = window.prompt("Enter R, P, or S:").toUpperCase().trim();
    console.log(userChoice)

    if (!userChoice) {
        return
    }

    while (
        !options.includes(userChoice)
    ) {
        alert('please enter a valid value');
        playGame();
    }

    let x = Math.floor((Math.random() * 3));
    let computerChoice = options[x];

    window.alert("the computer chose " + computerChoice);
    
    if (userChoice === computerChoice) {
        alert('Tie between you and Computer');
        ties++;

    } else if ( (userChoice === 'R' && computerChoice === 'S') ||
                (userChoice === 'P' && computerChoice === 'R') ||
                (userChoice === 'S' && computerChoice === 'P')
    ) {
            window.alert("you won");
            wins++;
    } else {
            window.alert("you lost");
            losses++;
    }

    window.alert(`
        Stats: 
            Wins: ${wins}
            Losses: ${losses}
            Ties: ${ties}
        `); 

     if (window.confirm("Play Again!") === true) {
        playGame();
    } else {
        text = "Thank you for playing";
    }

}

playGame();

