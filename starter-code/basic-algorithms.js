// Names and Input

console.log("I'm Ready");
//Driver
var hacker1 = "Jordi";
//var hacker2 = prompt("Your name");
//Navigator
var hacker2 = "Julia";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);
//Conditionals
if(hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");

} else if(hacker2.length === hacker1.length) {
      console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");

}
var capitalName = "";
for(var i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalName);

var reverseName = "";
for(var i = hacker2.length -1 ; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

if(hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely");

} else if(hacker2 === hacker1) {
      console.log("What?! You both got the same name?");

}
//var palindromo = prompt("Palindrome checker");
var palindromo = "amor a roma";
var reversePalindromo = "";
for (var i = palindromo.length - 1 ; i >= 0; i--) {
  reversePalindromo += palindromo[i];
}
console.log(reversePalindromo);
if (palindromo === reversePalindromo) {
console.log("It's a palindrome");
} else {
  console.log("Isn't a palindrome");

}




// Lorem ipsum generator


var LoremIpsum ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus mollis nunc. Nulla ornare eros non eleifend dapibus. Sed suscipit, leo vitae pulvinar tempor, metus ante pharetra nulla, vel tempor risus metus sed purus. Quisque efficitur scelerisque purus, in suscipit odio gravida eget. Donec vel lorem et enim laoreet fermentum sed sed eros. Duis sed enim erat. Vivamus gravida vulputate fermentum. Suspendisse et purus lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultrices turpis in ex porttitor commodo. Phasellus id feugiat enim. Duis dapibus dictum ipsum, vitae pharetra elit faucibus et. Ut lacinia non dui non fringilla. Suspendisse ut nisl pretium, laoreet felis placerat, pellentesque ante. Nunc aliquam ligula mauris, in bibendum ligula tempor eget. Pellentesque iaculis, erat sed egestas iaculis, odio sem rutrum libero, in consectetur purus lacus at arcu. "+
"Proin accumsan nisl id turpis ultrices, commodo malesuada eros blandit. Integer at egestas tellus, ut gravida dolor. Aenean et lorem porttitor, dictum nunc sit amet, mollis justo. Morbi vel eros posuere, mattis nibh vel, semper ipsum. Morbi faucibus consectetur nibh, at accumsan erat condimentum ac. Quisque ultrices augue sit amet risus finibus vehicula. Aenean eros nunc, tempor vel nulla in, efficitur facilisis nisi. Praesent suscipit luctus dapibus. Maecenas nec neque lacus. " +
"Proin est justo, scelerisque ac porta congue, varius quis diam. Sed laoreet nulla vitae augue ultrices gravida. Aliquam accumsan auctor massa, ornare pretium ligula suscipit nec. Nam condimentum sagittis mi, ac feugiat justo. Praesent efficitur placerat risus, id varius ex sollicitudin a. Duis ultricies commodo felis, et dignissim nulla volutpat a. Aenean mauris nibh, imperdiet posuere sapien non, condimentum facilisis leo. Sed in nunc elit. Donec dapibus tincidunt ipsum.";
var counterResult = LoremIpsum.split(" ");
console.log(counterResult.length);
var counterEt = 0;
for(var i = 0 ; i <= counterResult.length ; i++) {
  console.log(counterResult[i]);
  if (counterResult[i] === "et" || counterResult[i] === "et.") {
    counterEt += 1;
  }
}
console.log(counterEt);
