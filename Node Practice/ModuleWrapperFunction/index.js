// So What is module wrapper function?
// Ever Wondered How We Can Use All these kind of features of node like modules.exports,require,and other thing which we are using till now
// That's All Because of Node Module Wrapper Function
// So In Node Whatever code we write is already gets under a function name Module Wrapper Function Which is in backend and not visible to us
// all those modules or function we write in wrapper function is private scope we cannot directly use in global scope that's why we have to export it
// To Be Very precise wrapper function looks like this 
// (function(module,_dirname,_filename,require,exports){
//     code
// });
// This code is not visible to us but it is running in background and all other codes we do in node comes in this function where we can use all this property directly
// if we write code like this in our IDE then it'll not run thats because it got into two wrapper function means in two private function so avoid writing code like this write your code as you do always
// this is just for your understanding what is module wrapper function or If you are familiar with modern javascript it is also known as IIFE(Immediately Invoked Function Expression).