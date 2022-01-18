const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (answer) => {
  let name = answer;
  rl.question('Where do you live?', (answer) => {
    let live = answer;
    rl.question('What do you music do you listen to most often? ', (answer) => {
      let listen = answer;
      rl.question('What is your favourite meal?', (answer) => {
        let meal = answer;
        rl.question('What is your favourite movie? ', (answer) => {
          let movie = answer;
          rl.question('What sport is your absolute favourite? ', (answer) => {
            let sport = answer;
            rl.question('What is your superpower? ', (answer) => {
              let superpower = answer;
              
              console.log(`This here is ${name}. ${name} lives in ${live}. \n ${name} likes to watch ${movie} and listen to ${listen} while eating ${meal}.\n ${name} plays alot of ${sport} but would rather spend time using the powers of ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
