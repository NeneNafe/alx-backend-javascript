export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity.map((student) => {
    const newGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

    const newGrade = newGradeObj ? newGradeObj.grade : 'N/A';

    return { ...student, grade: newGrade };
  });
}
