function writeCards(names) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }

  let names = ["Guadalpue", "Aki", "Ollie"];
let thankYouMessages = writeCards(names);
console.log(thankYouMessages);

function countDown() {
    for (let i = 10; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown();