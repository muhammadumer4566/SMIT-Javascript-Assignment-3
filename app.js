//   ! chapter 12-13      JS Assignment 3

// ? Q1)

// var ch= "A";
// var ch="a";
// var ch= 0;
// if (ch >= 'A' && ch <= 'Z')
// document.write(ch + " is an UpperCase character <br>");
// else if (ch >= 'a' && ch <= 'z')
// document.write(ch + " is an LowerCase character <br>");
// else
// document.write(ch + " is not an alphabetic character <br>");

// ? Q2)

// var num1=35;
// var num2=23;
// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
//   } 
//   else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
//   }
//    else {
//     console.log("Both integers are equal: " + num1);
// }

// ? Q3)

// var num=+prompt("Enter your number ");
// if(num>0){
//     document.write("positive");
// }
// else if(num<0){
//      document.write("negative");
// }
// else{
//     document.write("zero");
// }

// ? Q4)

// var char=prompt('Enter the character'); 
// if(char.length===1)
// if (char === 'a' || char==='e' || char==='i' || char=== 'o' || char=== 'u') {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

// ? Q5)

// var correctPassward= "abc123";
// var userPassward=prompt("Enter your passward ");

// if(userPassward===null || userPassward === ""){
//     document.write("please enter your passward ");
// }
// else if(userPassward===correctPassward){
//      document.write("Correct! The password you entered matches the original password");
// }
// else{
//     document.write("Wrong passward");
// }

// ? Q6)

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }

// ? Q7)

// var userinput=+prompt("Enter the time in 24-hour clock format (e.g., 1900):")
// var time=parseInt(userinput);

// if(time >= 0 && time < 1200){
//     console.log("Good Morning! ");
// }
// else if(time>=1200 && time < 1700){
//     console.log("Good Afternoon!");
// }
// else if(time>=1700 && time < 2100){
//     console.log("Good evening!");
// }
// else if( time>=2100 && time < 2359){
//     console.log("Good night!");
// }
// else{
//     console.log("please enter your valid time!");
// }


// ! chapter 14-16

// ? Q1)

// var studentName = [];

// ? Q2)

// var studentNames = [];
// studentNames['student1'] = 'Umer';
// studentNames['student2'] = 'Ahmad';

// console.log(studentNames['student1']);
// console.log(studentNames['student2']);

// ? Q3)
// var stringsArray = ["apple", "banana", "mango", "orange"];

// ? Q4)
// var numArray = [21, 34, 56, 72];

// ? Q5)
// var boolArray = [true, false];

// ? Q6)
// var mixArray = ["apple", "banana", 34, 21, true, false];

// ? Q7)

// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// document.write("<h1>Qualifications:</h1>");
// document.write("<ol>");
// for (var i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ol>");

// ? Q8)

// var students=["Michael","Jhon","Tony"];
// var score=[320,230,480];
// var totalMarks=500;
// var percentage1=320/totalMarks*100;
// var percentage2=230/totalMarks*100;
// var percentage3=480/totalMarks*100;
// document.write("Score of Michael is 320. Percentage:"+ percentage1 +"%" +"<br>");
// document.write("Score of Jhon is 230. Percentage:"+ percentage2+"%" +"<br>");
// document.write("Score of Tony is 480. Percentage:"+ percentage3+"%" +"<br>");

// ? Q9)

// var colors=["blue","orange","yellow","white","pink"];
// document.write(colors);

// part a)

// var newColor=prompt("Enter a color to add to the beggining of array")
// var colors=["blue","orange","yellow","white","pink"];
// colors.unshift(newColor);
// document.write(colors);

// part b)

// var newColor=prompt("Enter a color to add to the beggining of array")
// var colors=["blue","orange","yellow","white","pink"];
// colors.push(newColor);
// document.write(colors);

// part c)

// var colors=["blue","orange","yellow","white","pink"];
// colors.unshift("purple","brown");
// document.write(colors);

// part d)

// var colors=["blue","orange","yellow","white","pink"];
// colors.shift(colors);
// document.write(colors);

// part e)

// var colors=["blue","orange","yellow","white","pink"];
// colors.pop(colors);
// document.write(colors);

// part f)

// var colors = ["blue", "orange", "yellow", "white", "pink"];
// var index = prompt("Enter the index at which you want to add a color:");
// var colorName = prompt("Enter the color name you want to add:");
//  colors.splice(index,0,colorName);
//  document.write(colors);

//  part g)

// var colors = ["blue", "orange", "yellow", "white", "pink"];
// var index = prompt("Enter the index at which you want to delete color(s):");
// var numToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(index,numToDelete);
// document.write(colors);

// ? Q10)

// var studentScore=[320,230,480,120];
// document.write("Scores of Students : " + studentScore +"<br>");
// studentScore.sort(function(a,b){
//     return a-b;
// });
// document.write("Ordered Scores of Students : " + studentScore);

// ? Q11)

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities List: "+"<br>"+ cities +"<br>");
// var selectedCities = [];

// selectedCities.push(cities[2]);
// selectedCities.push(cities[3]);

// document.write("Selected cities list:"+"<br>"+selectedCities);

// ? Q12)

// var arr = ["This", "is", "my", "cat"];
// document.write("Array:"+"<br>"+arr+"<br>");
// var singleString = arr.join(" ");

// document.write("String:"+"<br>"+singleString);

// ? Q13)

//  var devices = ["keyboard","mouse","printer","monitor"]
// document.write("Devices:"+"<br>"+devices+"<br>");

// var value1 = devices.shift();
// var value2 = devices.shift();
// var value3 = devices.shift();
// var value4 = devices.shift();

// document.write("Out:"+"<br>"+value1+"<br>");
// document.write("Out:"+"<br>"+value2+"<br>");
// document.write("Out:"+"<br>"+value3+"<br>");
// document.write("Out:"+"<br>"+value4+"<br>");

// ? Q14)

// var devices = ["keyboard","mouse","printer","monitor"]
// document.write("Devices:"+"<br>"+devices+"<br>");

// var value1 = devices.pop();
// var value2 = devices.pop();
// var value3 = devices.pop();
// var value4 = devices.pop();

// document.write("Out:"+"<br>"+value1+"<br>");
// document.write("Out:"+"<br>"+value2+"<br>");
// document.write("Out:"+"<br>"+value3+"<br>");
// document.write("Out:"+"<br>"+value4+"<br>");

// ? Q15)

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");

