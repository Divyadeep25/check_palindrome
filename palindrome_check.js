let str="adrak"
let a=0;
for(i=str.length-1;i>=0;i--){
	    a=a+str[i];
	}
if(str==a)
{
  return true;
}
else{
  return false;
}