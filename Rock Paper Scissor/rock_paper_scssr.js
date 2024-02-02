// ROCK PAPER SCISSOR GAME

// let user_choices = prompt('Choose (rock, paper, scissors)')  //take user input 
// user_choices = user_choices.toLowerCase()  //change input to match
// const options = ['rock', 'paper', 'scissors'] //provides options
// let computer_choices = options[Math.floor(Math.random() * 3)] //choose randomly from options

// if (user_choices === 'rock' && (computer_choices === 'paper' || computer_choices === 'scissors')){
//     alert(`You choosed ${user_choices} and computer choosed ${computer_choices}. You Won!`)
// }else if (user_choices === 'paper' && (computer_choices === 'rock' || computer_choices === 'scissors')){
//     alert(`You choosed ${user_choices} and computer choosed ${computer_choices}. You loss!`)
// }else if(user_choices === 'scissors' && computer_choices === 'rock'){
//     alert(`You choosed ${user_choices} and computer choosed ${computer_choices}. You loss!`)
// }else if (user_choices === 'scissors' && computer_choices === 'paper'){
//     alert(`You choosed ${user_choices} and computer choosed ${computer_choices}. You Won!`)
// }else{
//     alert (`You choosed ${user_choices} and computer choosed ${computer_choices}. GAME DRAW!`)
// }

let userScore = 0;
let compScore = 0;
let message = document.querySelector('#msg')

let uScore = document.querySelector('#user-score');
let cScore = document.querySelector('#comp-score');

const choices = document.querySelectorAll('.choice');

const genCompChoice = ()=>{
    let options = ['rock','paper', 'scissor']
    return (options[Math.floor(Math.random() * 3)]) //choose randomly from options

}

const drawGame = ()=>{
    message.innerText = ('Game was Draw! Play Again.');
    message.style.backgroundColor = 'orange';
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if (userWin){
        userScore++;
        uScore.innerHTML = userScore;
        message.innerText = (`You Win! ${userChoice} beats ${compChoice}`);
        message.style.backgroundColor = 'green';
    }else{
        compScore++;
        cScore.innerHTML = compScore;
        message.innerText = (`You Lose! ${compChoice} beats ${userChoice}`);
        message.style.backgroundColor = 'red'
    }
}

const playGame= (userChoice)=>{
    let compChoice = genCompChoice()
    if (userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true;
        if (userChoice === 'rock'){
            //paper, scissor
            userWin = compChoice === 'paper'? false:true;
        }else if (userChoice === 'paper'){
            //scissor, rock
            userWin = compChoice==='scissor' ?false :true ;
        }else {
            // rock, paper
            userWin = compChoice==='rock' ?false :true;
        }
        showWinner(userWin, userChoice, compChoice)
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice)
    });
});