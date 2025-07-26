console.log("Script loaded successfully!");

//  main game starts from here

const arr = ["rock", "paper", "scissors"];

function get_computer_choice(){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function get_human_choice(){
    const human_choice = prompt("Enter your choice: rock, paper or scissors?",'nothing');
    return human_choice == null ? 'nothing' : human_choice.toLowerCase(); // here we are assuming the user will enter a valid choice
}

function play_round(human_choice, comp_choice, human_score, computer_score){
    if(human_choice == null || human_choice == 'nothing' || human_choice == ''){
        console.log("You didn't enter a valid choice. Please try again.");
    }

    if(human_choice == comp_choice){
        console.log("It's a tie! You both chose : " + human_choice);
    }
    else{
        if(human_choice == "rock" && comp_choice == 'paper'){
            console.log("You lose ! Computer wins ! Paper beats rock.");
            computer_score++;
        }
        else if(human_choice == "rock" && comp_choice == 'scissors'){
            console.log("You win! Computer loses ! Rock beats scissors.");
            human_score++;
        }
        else if(human_choice == "paper" && comp_choice == 'rock'){
            console.log("You win! Computer loses ! Paper beats rock.");
            human_score++;
        }
        else if(human_choice == "paper" && comp_choice == 'scissors'){
            console.log("You lose ! Computer wins ! Scissors beats paper.");
            computer_score++;
        }
        else if(human_choice == "scissors" && comp_choice == 'rock'){
            console.log("You lose ! Computer wins ! Rock beats scissors.");
            computer_score++;
        }
        else if(human_choice == "scissors" && comp_choice == 'paper'){
            console.log("You win! Computer loses ! Scissors beats paper.");
            human_score++;
        }
    }

    console.log("Your score : " + human_score + "\n"
                + "Computer score : " + computer_score);

    return [human_score, computer_score];

}


function play_game(){
    let rounds = 5;
    let human_score = 0;
    let computer_score = 0;

    while(rounds > 0){

        const human_choice = get_human_choice();
        const comp_choice = get_computer_choice();

        [human_score, computer_score] = play_round(human_choice, comp_choice, human_score, computer_score);

        // setTimeout("Next round starts in ...",2000);

        rounds--;
    }
    console.log("Game Over !! Final Scores:\n "
                + "Your Score : " + human_score + "\n"
                + "Computer Score : " + computer_score);

    if(human_score > computer_score){
        console.log("Congratulations! You win the game!");
    } else if(human_score < computer_score) {
        console.log("Sorry! You lose the game. Better luck next time!");
    } else {
        console.log("It's a tie! Well played!");
    }
}