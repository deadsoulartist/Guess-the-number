//Step4:Defining the secret number
let secretNumber = Math.trunc(Math.random() * 10) + 1;

//Step5:Just while we code to know what number is being generated
// document.querySelector(".messageNumber").textContent = secretNumber;

//Step10:Creating a variable to store chances
let chances = 5;

// Step13:Setting the highscore value
//creating a variable to asssign a value
let highScore = 0;
//Step1:Call the button
document.querySelector(".btn1").addEventListener("click", function () {
  //Step2:connecting the input field to button and saving the user input value and saving it into a variable
  const guess = Number(document.querySelector(".textBox").value);
  console.log(guess);
  //Step3:if user did not input anything but clicked button
  if (!guess) {
    document.querySelector(".messageText").textContent =
      "Type a number you dumbfuck 🙄";
  } //Step6: Continue elseif and mentioning the case when the guess = to secret
  else if (guess === secretNumber) {
    document.querySelector(".messageText").textContent = "You won, Bitch!!! 🙌";
    document.querySelector(".messageNumber").textContent = secretNumber;
    //Changing the background color
    document.querySelector("body").style.backgroundColor = "#60b347";
    //Step14:If else loop for highscore
    if (chances > highScore) {
      highScore = chances;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
  //Step7:When the guess is high
  else if (guess > secretNumber) {
    //Step11:Displaying "you lost" when chances becomes zero, so create if else and store all in it - if condition is if(chances>1) meaning operations will carry if the chances is atleast 1, else statement will be "you lost"

    if (chances > 1) {
      //Step9:Each time user guesses wrong, the chances should decrease to one, the guessing wrong scenarios happen at > and < if block,
      document.querySelector(".messageText").textContent = "Too high 👆";
      chances--;
      document.querySelector(".chances").textContent = chances;
    } else {
      document.querySelector(".messageText").textContent =
        "You lost, try again looser 😑";
      document.querySelector(".chances").textContent = "0";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //Step8:When the guess is low
  else if (guess < secretNumber) {
    if (chances > 1) {
      document.querySelector(".messageText").textContent = "Too low 👇";
      chances--;
      document.querySelector(".chances").textContent = chances;
    } else {
      document.querySelector(".messageText").textContent =
        "You lost, try again looser 😑";
      document.querySelector(".chances").textContent = "0";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//Step12:Implimenting the reset or play again button just like guess button
document.querySelector(".btn2").addEventListener("click", function () {
  chances = 5;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".messageText").textContent = "Take a guess 🤔";
  document.querySelector(".messageNumber").textContent = "?";
  document.querySelector(".chances").textContent = chances;
  document.querySelector(".textBox").textContent = "";
  document.querySelector("body").style.backgroundColor = "white";
});
