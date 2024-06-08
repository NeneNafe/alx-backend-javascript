const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // Splits the data & take only the list without the header
      const lines = data.split('\n').slice(1, -1);
      // give the header of data
      const header = data.split('\n').slice(0, 1)[0].split(',');
      // find the firstname and field index
      const IndxFn = header.findIndex((ele) => ele === 'firstname');
      const indxFd = header.findIndex((ele) => ele === 'field');

      const fields = {};
      const students = {};

      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[indxFd]]) fields[list[indxFd]] = 0;
        fields[list[indxFd]] += 1;
        if (!students[list[indxFd]]) students[list[indxFd]] = '';
        students[list[indxFd]] += students[list[indxFd]]
          ? `, ${list[IndxFn]}`
          : list[IndxFn];
      });
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const number = fields[key];
          all[key] = {
            students: `List: ${students[key]}`,
            number,
          };
        }
      }

      return resolve(all);
    });
  });
};
