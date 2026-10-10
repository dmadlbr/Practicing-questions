Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 10)
    .then(result => {
        console.log(result);
    });

//eg2
function getNumber() {
    return new Promise((resolve, reject) => {
        resolve(10);
    });
}

getNumber()
    .then(num => {
        console.log("First:", num);
        return num * 2;
    })
    .then(num => {
        console.log("Second:", num);
        return num + 5;
    })
    .then(num => {
        console.log("Final:", num);
    })
    .catch(error => {
        console.log("Error:", error);
    });

//eg3
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 40) {
            resolve(marks);
        } else {
            reject("You failed!");
        }
    });
}

checkMarks(75)
    .then(marks => {
        console.log("Marks:", marks);
        return marks + 5;
    })
    .then(updatedMarks => {
        console.log("Updated Marks:", updatedMarks);
    })
    .catch(error => {
        console.log("Error:", error);
    });