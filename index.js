// Code your solutions in this file
function writeCards(missev, birthday) {
  let messages = [];

  for (let i = 0; i < missev.length; i++) {
    let message = `Thank you, ${missev[i]}, for the wonderful ${birthday} gift!`;
    messages.push(message);
  }

  return messages;
}
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
