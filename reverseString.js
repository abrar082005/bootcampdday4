/*this program is to test if a word is a palindrome or not and if it is not it reverses the word*/
function reverseString(text){
  var palindrome = text.split('').reverse().join(''); //to change the word in reverse
  if (text === ""){
    return null
  }
  else if (palindrome == text){
    return true;
  }
  else{  
    return palindrome;
  }
}