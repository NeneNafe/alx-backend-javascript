const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    // Split data and take only list without header
    const lines = data.split('\n').slice(1, -1);
    // Now give the header of data
    const header = data.split('\n').slice(0, 1)[0].split(',');
    // Find firstname & field index
    const indexFn = header.findIndex((ele) => ele === 'firstname');
    const indexFd = header.findIndex((ele) => ele === 'field');
    // declare two dictionaries
    const fields = {};
    const students = {};

    lines.forEach((line) => {
      const list = line.split(',');
      if (!fields[list[indexFd]]) fields[list[indexFd]] = 0;
      fields[list[indexFd]] += 1;
      if (!students[list[indexFd]]) students[list[indexFd]] = '';
      students[list[indexFd]] += students[list[indexFd]] ? `, ${list[indexFn]}` : list[indexFn];
    });

    console.log(`Number of students: ${lines.length}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
