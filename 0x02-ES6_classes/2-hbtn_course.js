export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('Student must be an integer');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(namepar) {
    if (typeof namepar !== 'string') throw TypeError('Name must be a string');
    this._name = namepar;
  }

  set length(lenpar) {
    if (typeof lenpar !== 'number') throw TypeError('Length must be a number');
    this._length = lenpar;
  }

  set students(stdpar) {
    if (!Array.isArray(stdpar)) throw TypeError('Students must be an array');
    stdpar.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('Student must be an integer');
    });
    this._students = stdpar;
  }
}
