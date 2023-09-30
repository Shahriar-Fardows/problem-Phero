// ---------------------------------------------------------------------------problem 1

function cubeNumber(number, cube) {
  if (typeof number === "number") {
    return number ** cube;
  } else {
    return NaN;
  }
}

const maltipyNumber = 10;
const CubeNumber = 3;

const input = cubeNumber(maltipyNumber, CubeNumber);
console.log(input);

// ---------------------------------------------------------------------------problem 2

function matchFinder(string1, string2) {
    
if (typeof string1 === 'string' && typeof string2 === 'string' ) {
    return true;
} 
if (string1.includes(string2)) {
    return true;
 } 
  else {
    return false;
  }

}

const finder = matchFinder("Hello world!", 55);
console.log(finder);

// ---------------------------------------------------------------------------problem 3

function sortMaker(arr) {
    const [num1, num2] = arr;
   if (typeof num1 === "number" && num1 > 0 && typeof num2 === "number" && num2 > 0 ){
    return [num1, num2].sort((num1 , num2) => num2 - num1);
   } 
   else if (num1 === num2) {
    return "equal";
  } 
  else{
    return "Invalid";
  }
}

const num =[ 1 , 5];
const short = sortMaker(num);
console.log(short);


// ---------------------------------------------------------------------------problem 4

function findAddress(obj) {
    if (obj.street || obj.house || obj.society) {
       
        const Address = { street: obj.street || '__', house: obj.house || '__',  society: obj.society || '__', };
        return `${Address.street}, ${Address.house}, ${Address.society}`;
      } 
      else {
        
        return `${obj.street}, ${obj.house}, ${obj.society}`;

      }
}

const address1 = {street:10, house:'15A', society:'Earth Perfect'} ;
  const output = findAddress(address1);
console.log(output);

// ---------------------------------------------------------------------------problem 5

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Minimum purchase required";
    }

    const totalChange = changeArray.reduce((acc, note) => acc + note, 0);

    if (totalChange >= totalDue) {
        return true;
    } 
    else {
        return false;
      }

}

const pay = canPay([1, 2, 5], 10);

console.log(pay);