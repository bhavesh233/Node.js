// 3) Let's change the previous function a bit to include a variable and a return statement:
// function stringLength(str){
//     let length = str.length
//     console.log(`the length of ""${str}"" is:`, length)
//     return str.length
// }

// stringLength(""willynilly"")

const stringLength = ((str)=>{
    let length = str.length
    console.log(`The length of ${str} is: `+ length );
    // return str.length;
})
 stringLength("willynilly");