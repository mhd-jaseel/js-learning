// Callback Function
function showResult(studentName) {
    console.log(studentName + " passed the exam.");
}

// Main Function
function checkExam(studentName, resultFunction) {

    // Step 1: This line executes first
    console.log("Checking exam result...");

    // Step 2: Assume the student passed
    const passed = true;

    // Step 3: Check whether the student passed
    if (passed) {

        // Step 4:
        // resultFunction currently refers to showResult
        // So JavaScript actually executes:
        // showResult(studentName);

        resultFunction(studentName);

    } else {

        // This block runs only if passed is false
        console.log(studentName + " failed the exam.");
    }
}

// Step 5:
// Calling the main function
// "Jaseel" goes to studentName
// showResult goes to resultFunction

checkExam("Jaseel", showResult);



function display(name) {
    console.log("Welcome " + name);
}

function login(callback) {
    const user = "Jaseel";

    callback(user);
}

login(display);