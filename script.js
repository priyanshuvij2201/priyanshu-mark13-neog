

function reversedList(str) {
  
  var str = 'hello';
  var charList = str.split('');
  var reversedList = charList.reverse()
  var newList = reversedList.join('')
  return newList;
  // Input: a string (Example: "hello")
  // Output: reverse of the input string (Example: "olleh")
}

function checkPalindrome(name) {
  var reverseName = name.split('').reverse().join('');
  if (reverseName == name)
    return true;
  else
    return false;
}

function dateToStr(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (Number(date.day) < 10)
    dateStr.day = '0' + date.day.toString();
  else
    dateStr.day = date.day.toString();
  if (date.month < 10)
    dateStr.month = '0' + date.month.toString();
  else
   { dateStr.month = date.month.toString();}
  dateStr.year = date.year.toString();
  return dateStr;
}

function dateVariation(date) {
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var mmddyy = date.day + date.month + date.year.slice(-2);
  var ddmmyy = date.day + date.month + date.year.slice(-2);
  var yymmdd = date.year.slice(-2) + date.month + date.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, mmddyy, ddmmyy, yymmdd];


}
function checkAllFormat(date) {
  var allFormat = dateVariation(date);
  var allDateList=[];
  var j = 0;
  var i = 0;
  var pos = 0;
  for (i = 0; i < allFormat.length; i++) {
      var result = checkPalindrome(allFormat[i]);
      if(result){
          j++;
          break;}
}
if(j>0)
return true;
else
return false;
}

function checkLeapYear(year){
  if (year % 400 === 0) 
  return true;

  if (year % 100 === 0) 
  return false;

  if (year % 4 === 0) 
  return true;

  return false;  

}


function nextDate(date){
var day=date.day+1
var month=date.month;
var year = date.year;
 var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//why couldnt we use date directly ?
 if(day>dateMonth[month-1]){
  if(month==2){
    if(checkLeapYear(year)){
    if(day>29){
      day=1;
      month=3;}}
    else {
      day=1;
      month=3;}}
    day=1;//add later for leap year check 
    month=month+1;
 }
 if(date.month>12)
 {
    date.month=1;
    date.year=date.year+1;
 }
 
 return {//remeber to return object(could be a common mistake)
  day:day,
  month: month,
  year: year,
  };

}
function previousDate(date){
  var day=date.day-1
  var month=date.month;
  var year = date.year;
   var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   if(day==0){
    if(month==0){
      month=12;
      year=year-1;
   }
    else if(month==3){
        if(checkLeapYear(year)){
          day=29;
          month=2;}
        else{
          day=28;
          month=2;}}
    else{
         month=month-1;
         day=dateMonth[month-1];
        }
    }
    
  return {
    day: day,
    month: month,
    year: year,
  };
}

function previousPalindrome(date)
{  var date1=previousDate(date);
   console.log(date1);
   var ctr1=0;
   var allDateList=false;
  while(1)
  {ctr1++
      var dateStr=dateToStr(date1);
      var allDateList=checkAllFormat(dateStr);
      console.log(allDateList)
      if(allDateList)
      return[ctr1,date1];
      date1=previousDate(date1);

  }
} 

// function dispdate(allFormat,pos)
// { var dateStr = { day: '', month: '', year: '' };
//   dateStr.day=allFormat[pos].slice(-2);
//   dateStr.month=allFormat[pos].slice(-0);
//   dateStr.year=allFormat[pos].slice(-4);
//   console.log(dateStr);
 

// function missedDate(date,olddate)
// {
// //   var old=dateToStr(olddate);
// //   var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// //   if(old.date>date.day)
// //   var missedday=old.day-date.day;
// //   else
// //   var missedday=date.day-old.day;
// //   console.log(missedday);
// //   var totaldays=0;
// //   for(var i=(old.month-1);i<(date.month);i++)
// //   totaldays+=dateMonth[i];
// //   var misssedyear=(old.year-date.year)*365;
// //   var total=missedday+totaldays+misssedyear

// }
function nextPalindromeDate(date){
    var date1=nextDate(date);
    console.log(date1);
    var ctr=0;
   var allDateList=false;
    while(1)
    {ctr++
        var dateStr=dateToStr(date1);
        var allDateList=checkAllFormat(dateStr);
        console.log(allDateList)
        if(allDateList)
        return[ctr,date1];
        date1=nextDate(date1);

    }
}
var newnew=document.querySelector("#input-date");
var checkNumberButton=document.querySelector(".check-number");
var input = newnew.value;
var outputBoxArea=document.querySelector(".output-box-area")


function clickHandler(e){
    var bdayStr=newnew.value;
    if(bdayStr != '')
    {
        var listOfDate=bdayStr.split('-');
        var date={
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
          };
          console.log(date);
          var dateStr=dateToStr(date);
          console.log(dateStr);
          var list=checkAllFormat(dateStr);
          console.log(list);
          var isPalindrome=false;
          if(list)
          isPalindrome=true;

}
console.log(isPalindrome);
if(isPalindrome==false){
  console.log("entered")
const [ctr1,nextDate]=nextPalindromeDate(date);
const [ctr,prevDate]=previousPalindrome(date);
console.log(ctr1);
console.log(ctr);
if(ctr1>ctr)
{
  outputBoxArea.innerHTML="Your birthday is not a palindrome , you missed it by " + ctr + "days. The palindrome was on " + prevDate.day + '-' + prevDate.month + '-' + prevDate.year;
}
else{
outputBoxArea.innerHTML="Your birthday is not a palindrome , you missed it by " + ctr1 + "days. The palindrome is on " + nextDate.day + '-' + nextDate.month + '-' + nextDate.year;
}

}

}








checkNumberButton.addEventListener('click',clickHandler);


