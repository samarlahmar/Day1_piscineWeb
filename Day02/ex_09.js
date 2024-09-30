displayThisText("The variable value is"+" "+input_var) ;
if (typeof(input_var)==="number"){
var input_var_string = String(input_var);
input_var_string.indexOf('.')!== -1 ? displayThisText("The variable type is float") :
 displayThisText("The variable type is integer");
}
else {displayThisText("The variable type is"+" "+typeof(input_var)) ;}
console.log(input_var);
tab42 = ['42', 42,'forty two'] ;
console.log(tab42.includes(input_var));
tab42.includes(input_var)? displayThisText("It is the meaning of life.") : displayThisText("") ;