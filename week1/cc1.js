// exercises 1
console.log("Exercises 1");  

// Marks and John's mass and height for Test Data 1
let Marks_mass = 78;
let Marks_heigh = 1.69;

let John_mass = 91;
let John_heigh = 1.95;

// Marks and John's mass and height for Test Data 2
let Marks_mass1 = 95;
let Marks_heigh1 = 1.88;

let John_mass1 = 85;
let John_heigh1 = 1.76;

// Function to calculate BMI
function BMI_calculator(mass, height) {
    const BMI = mass / (height * height);
    return BMI;
}

// Calculate BMIs for Test Data 1
let markBMI1 = BMI_calculator(Marks_mass, Marks_heigh);
let johnBMI1 = BMI_calculator(John_mass, John_heigh);

console.log("Mark's BMI (Test Data 1) = ", markBMI1);  
console.log("John's BMI (Test Data 1) = ", johnBMI1);  

// Calculate BMIs for Test Data 2
let markBMI2 = BMI_calculator(Marks_mass1, Marks_heigh1);
let johnBMI2 = BMI_calculator(John_mass1, John_heigh1);

console.log("Mark's BMI (Test Data 2) = ", markBMI2);  
console.log("John's BMI (Test Data 2) = ", johnBMI2);  

// Create a Boolean variable to check if Mark's BMI is higher than John's
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Is Mark's BMI higher than John's in Test Data 1? ${markHigherBMI1}`);
console.log(`Is Mark's BMI higher than John's in Test Data 2? ${markHigherBMI2}`);




//exercises 3
console.log("Exercises 3");  

// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Test Data Bonus 1
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

// Test Data Bonus 2
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

// Function to calculate the average score
function calculateAverage(scoreArray) {
    let sum = 0;
    for (let i = 0; i < scoreArray.length; i++) {
        sum += scoreArray[i];
    }
    return sum / scoreArray.length;
}

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    console.log(`Dolphins Average: ${dolphinsAverage}`);
    console.log(`Koalas Average: ${koalasAverage}`);

    if (dolphinsAverage >= 100 || koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
            console.log("Dolphins win the trophy!");
        } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
            console.log("Koalas win the trophy!");
        } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
            console.log("It's a draw, and both teams win the trophy!");
        } else {
            console.log("No team wins the trophy due to a tie or insufficient score.");
        }
    } else {
        console.log("No team wins the trophy due to insufficient score.");
    }
}

// Test Data 1
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

// Test Data Bonus 1
console.log("\nTest Data Bonus 1:");
determineWinner(dolphinsScores2, koalasScores2);

// Test Data Bonus 2
console.log("\nTest Data Bonus 2:");
determineWinner(dolphinsScores3, koalasScores3);




// exercises 4

console.log("exercises 4");
function calculateTip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}

// Test Data
const testData = [275, 40, 430];
testData.forEach(bill => calculateTip(bill));
