const sentence = "hello there from lighthouse labs";
let timeout = 0;

const typeWriter = function (text) {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeout);
    timeout += 50;
  }
};

typeWriter(sentence);
setTimeout(() => {
  console.log("");
}, timeout);
