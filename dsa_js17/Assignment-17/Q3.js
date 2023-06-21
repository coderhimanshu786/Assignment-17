//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

const countStudents = function(students, sandwiches) {
    while (students.length>0 && students.indexOf(sandwiches[0])!=-1) {
        if (students[0] == sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        }
        else students.push(students.shift());
    }
    return students.length
    };
    //Example - 1
    console.log(countStudents([1,1,0,0], [0,1,0,1]));
    //Example - 2
    console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));