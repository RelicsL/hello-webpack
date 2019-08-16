const fs = require('fs');

function test() {
  const content = `console.log('just for test ooooooo')`
  fs.writeFile('./src/test.js', content, function (err) {
    if (err) {
      console.log(err);
    }
  })
  console.log('write sccessfully!!!');
}

test();
