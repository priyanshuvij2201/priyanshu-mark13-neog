var newnew=document.querySelector("#input-date");
var checkNumberButton=document.querySelector(".check-number");
var input = newnew.value;
var outputBoxArea=document.querySelector(".output-box-area")

function reversedList(str) {
  console.log("hELLO");
  var str = 'hello';
  var charList = str.split('');
  var reversedList = charList.reverse()
  var newList = reversedList.join('')
  console.log(newList);
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
  var dateStr = { day: '', month: '', year: '' };

  if (date.day < 10)
    dateStr.day = '0' + date.day.toString();
  else
    dateStr.day = date.day.toString();
  if (date.month < 10)
    dateStr.month = '0' + date.month.toString();
  else
   { dateStr.month = date.month.toString();}
  dateStr.year = date.year.toString();
console.log(dateStr.day.value + dateStr.month.value + dateStr.year.value + " datetoStr")
  return dateStr;
}

function dateVariation(date) {
  var dateStr = dateToStr(date);
  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var mmddyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, mmddyy, ddmmyy, yymmdd];


}
function checkAllFormat(date) {
  var allFormat = dateVariation(date);
  console.log(allFormat);
  var j = 0;
  var i = 0;
  var pos = 0;
  for (i = 0; i < allFormat.length; i++) {
    if (checkPalindrome(allFormat[i]) == true) {
      j = 1;
      pos = i;

    }
    if (j == 1)
      break;
  }
  if (j == 1) {
    if(ctr==0)
    outputBoxArea.innerHTML="Your birthday is palindrome";
    else
    outputBoxArea.innerHTML="You missed by " + ctr + " days. The date is " + allFormat[pos];}
  if (j == 0) {
    nextPalindromeDate(date);
  }
}


function missedDate(date,olddate)
{
//   var old=dateToStr(olddate);
//   var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if(old.date>date.day)
//   var missedday=old.day-date.day;
//   else
//   var missedday=date.day-old.day;
//   console.log(missedday);
//   var totaldays=0;
//   for(var i=(old.month-1);i<(date.month);i++)
//   totaldays+=dateMonth[i];
//   var misssedyear=(old.year-date.year)*365;
//   var total=missedday+totaldays+misssedyear

}

var ctr=0;

function nextPalindromeDate(date) {
   ctr++;
  date.day = date.day + 1;
  var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (date.month == 2) {
    if (date.year % 400 == 0)
      dateMonth[date.month - 1] = 29;
    if (date.year % 100 == 0)
      dateMonth[date.month - 1] = 28;
    if (date.year % 4 == 0)
      dateMonth[date.month - 1] = 29;
  }

  if (date.day > dateMonth[date.month - 1]) {
    date.day = 1;
    date.month = date.month + 1;
  }
  if (date.month > 12) {
    date.month = 1;
    date.year = date.year + 1;
  }
  var dateStr = dateToStr(date);
  checkAllFormat(date);




}
function clickHandler(){
    var bdayStr=newnew.value;
    if(bdayStr != '')
    {
        var listOfDate=bdayStr.split('-');
        var date={
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
          }
          var olddate = {
            day:  Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
          }
          
        
          
          checkAllFormat(date);
          missedDate(date,olddate);
         
          
}
}







checkNumberButton.addEventListener('click',clickHandler);


