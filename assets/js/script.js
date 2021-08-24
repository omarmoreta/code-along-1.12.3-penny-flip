let head = 0;
let tail = 0;

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hi");
  let flip = document.getElementById("flip");
  flip.addEventListener("click", function () {
    console.log("You Flipped Heads");
    let flipped = Math.random() < 0.5;
    console.log(flipped);
    if (flipped) {
      document.getElementById("penny_img").src =
        "./assets/images/penny-heads.jpg";
      document.getElementById("message").textContent = "You Flipped Heads!";
      head++;
      console.log(head);
    } else {
      document.getElementById("penny_img").src =
        "./assets/images/penny-tails.jpg";
      document.getElementById("message").textContent = "You Flipped Tails!";
      tail++;
      console.log(tail);
    }
    let total = head + tail;
    let headpercentage = 0;
    let tailpercentage = 0;
    if (total > 0) {
      headpercentage = Math.round((head / total) * 100);
      tailpercentage = Math.round((tail / total) * 100);
      document.getElementById("heads").textContent = head;
      document.getElementById("heads-percent").textContent =
        headpercentage + "%";
      document.getElementById("tails").textContent = tail;
      document.getElementById("tails-percent").textContent =
        tailpercentage + "%";
    }
  });
  let clear = document.getElementById("clear");
  clear.addEventListener("click", function () {
    console.log("cleared");
    document.getElementById("message").textContent = "Lets Get Rolling!";
    let headpercentage = 0;
    let tailpercentage = 0;
    head = 0;
    tail = 0;
    document.getElementById("heads").textContent = head;
    document.getElementById("heads-percent").textContent = headpercentage + "%";
    document.getElementById("tails").textContent = tail;
    document.getElementById("tails-percent").textContent = tailpercentage + "%";
  });

  // Flip Button Click Handler
  // todo: Determine flip outcome
  // todo: Update image and status message in the DOM

  // Update the scorboard
  // todo: Calculate the total number of rolls/flips
  // Make variables to track the percentages of heads and tails
  // todo: Use the calculated total to calculate the percentages
  // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
  // todo: Update the display of each table cell

  // Clear Button Click Handler
  // todo: Reset global variables to 0
  // todo: Update the scoreboard (same logic as in flip button click handler)
});
