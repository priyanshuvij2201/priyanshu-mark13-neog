
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

  function checkAllFormat(date){
var allFormat=dateVariation(date);
var p=1;
for (let i = 0; i < allFormat.length; i++) {
    if (checkPalindrome(allFormat[i]) == true){
        p=0;
        console.log(allFormat[i]);
        break;} 
}
if(p==0)
return true;
if(p==1){
return false;
}


  }

  function nextDate(date){
      date.day=date.day+1;
     var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     if(date.day>dateMonth[date.month-1])
     {  date.day=1;//add later for leap year check 
        date.month=date.month+1;
     }
     if(date.month>12)
     {
        date.month=1;
        date.year=date.year+1;
     }
     
     return date;

  } 

  function nextPalindromeDate(date)
  { var a=false;
   var date1 = nextDate(date);
    var b=1;
    while(a == false)
    {
        a = (checkAllFormat(date1));
        next= nextDate(date1);}


}



  var ctr1=0;
  function previousDate(date){
    ctr1++;
     date.day=date.day-1;
     var dateMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     if(date.day==0)
     {  date.day=dateMonth[date.month-1];//add later for leap year check 
        date.month=date.month-1;
     }
     if(date.month==0)
     {
        date.month=12;
        date.year=date.year-1;
     }
     return date ;      
  }

  function previousPalindrome(date)
  { var a=false;
   var date1 = previousDate(date);
    var b=1;
    while(a == false)
    {
        a = checkAllFormat(date1);
        prev= previousDate(date1);}
  }
//   function clickHandler(e) {
//     var bdayString = bdayInput.value;
  
//     if (bdayString !== "") {
//       var date = bdayString.split("-");
//       var yyyy = date[0];
//       var mm = date[1];
//       var dd = date[2];
  
//       var date = {
//         day: Number(dd),
//         month: Number(mm),
//         year: Number(yyyy),
//       };
  
//       var dateStr = getDateAsString(date);
//       var list = checkPalindromeForAllDateFormats(dateStr);
//       var isPalindrome = false;
  
//       for (let i = 0; i < list.length; i++) {
//         if (list[i]) {
//           isPalindrome = true;
//           break;
//         }
//       }
  
//       if (!isPalindrome) {
//         const [ctr1, nextDate] = getNextPalindromeDate(date);
//         const [ctr2, prevDate] = getPreviousPalindromeDate(date);
  
//         if (ctr1 > ctr2) {
//           resultDiv.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`;
//         } else {
//           resultDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
//         }
//       } else {
//         resultDiv.innerText = "Yay! Your birthday is palindrome!";
//       }
//     }
//   }
  
  var date={
    day: 07,
    month:07,
    year: 2022
  }

  previousPalindrome(date);
  var date={
    day: 07,
    month:07,
    year: 2022
  }
  nextPalindromeDate(date);