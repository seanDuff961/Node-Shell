const fs = require('fs');

module.exports = function () {
  // pwd code
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'ls') {
      //process.stdout.write(process.ls());
      fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          throw err;
        }
        else {
          process.stdout.write(files.join('\n'));
          process.stdout.write('prompt > ');
        }
      });
    }

    process.stdout.write('\nprompt> ');

  });
}




