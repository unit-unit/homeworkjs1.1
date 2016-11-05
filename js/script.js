// var rootNumber=prompt('hi! to find exponent of the number! enter your number');
// var a = +rootNumber;
// console.log (typeof a);

// var ofNumber=prompt('now exponent')
// var b = +ofNumber;
// console.log (typeof b);

// var result = Math.pow (a, b);
// console.log('result= ', result)


function pow(x,n)
{
  var result = 1;
  for(var i=0;i<n;i++) {
    result*=x;}
  return result;
}

x=prompt("x?",'')
n=prompt("n?",'')
if (n<0)
{
  alert('Степень '+n+'не поддерживается, введите целую степень, большую 0');
}
else
{
  console.log('result = ', pow(x,n))
}
