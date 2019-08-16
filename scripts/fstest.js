const fs = require('fs');

function rewrite(file) {
  fs.readFile(file, function (err, data) {
    if (err) {
      console.log(err)
    }
    let content = data.toString();
    content = content.replace(/console.error/g, 'console.log');
    fs.writeFile(file, content, function (err) {
      if (err) {
        console.log(err);
      }
    })
  })
}

function mapAllFiles(dir) {
  let result = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      result = result.concat(mapAllFiles(file));
    } else if (/\.tsx?$/.test(file)) {
      rewrite(file);
      result.push(file);
    }
  })
  return result
}

const all = mapAllFiles('src');
console.log(all);