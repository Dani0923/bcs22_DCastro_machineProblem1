// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program:     Computation of Grades using Function
	Programmer:  Danielle L. Castro
	Section:     BCS22
	Start Date:  April 17, 2023
	End Date:    April 25, 2023
*/

let name, eA1, eA2, eA3, eA4, eA5, sA1, sA2, sA3, finalExam;
let classParticipation, summativeAssessment, finalGrade, letterGrade;
let Grade = [];

for (let i = 1; i < 6; i++){
	name = prompt("Enter Name of Student " + i + ": ");
	eA1 = parseInt(prompt("Enter Enabling Assessment 1: "));
	eA2 = parseInt(prompt("Enter Enabling Assessment 2: "));
	eA3 = parseInt(prompt("Enter Enabling Assessment 3: "));
	eA4 = parseInt(prompt("Enter Enabling Assessment 4: "));
	eA5 = parseInt(prompt("Enter Enabling Assessment 5: "));
	sA1 = parseInt(prompt("Enter Summative Assessment 1: "));
	sA2 = parseInt(prompt("Enter Summative Assessment 2: "));
	sA3 = parseInt(prompt("Enter Summative Assessment 3: "));
	finalExam = parseInt(prompt("Enter Final Exam: "));

	classParticipation = (eA1 + eA2 + eA3 + eA4 + eA5) / 5;
	summativeAssessment = (sA1 + sA2 + sA3) / 3;
	finalGrade = Math.round((classParticipation * 0.3) + (summativeAssessment * 0.3) + (finalExam * 0.4));

	if (finalGrade >= 90) {
		letterGrade = "A";
	} else if (finalGrade >= 80) {
		letterGrade = "B";
	} else if (finalGrade >= 70) {
		letterGrade = "C";
	} else if (finalGrade >= 60) {
		letterGrade = "D";
	} else {
		letterGrade = "F";
	};

	Grade[i] = {
		Student_Name: name,
		Class_Participation: Math.round(classParticipation),
		Summative_Assessment: Math.round(summativeAssessment),
		Final_Exam: finalExam,
		Final_Grade: finalGrade,
		Letter_Grade: letterGrade
	};
};

console.table(Grade);