var arr=[10,13,20,25,40,73,60,55,80,99];
var count=0
for (let i=0;i<arr.length;i++)
{
 if(arr[i]%2!=0)
 {
  count++;
 }
 }
 document.write(count);