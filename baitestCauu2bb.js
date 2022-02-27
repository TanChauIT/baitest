function findLongestSubstring(str){
    let firstSubString = '';
    let longestSubString = '';
    for(let i = 0; i < str.lengt    h; i++){
      if(firstSubString.includes(str[i])){
        if(longestSubString.length <= firstSubString.length) longestSubString = firstSubString;
        firstSubString = '';
      }
      firstSubString += str[i];
    }
    if(longestSubString.length <= firstSubString.length) longestSubString = firstSubString;
    return [longestSubString, longestSubString.length];
  }
  
  console.log(findLongestSubstring('abcabcbb'))
  console.log(findLongestSubstring('bbbbb'))
  console.log(findLongestSubstring('pwwkew'))
  console.log(findLongestSubstring(''))
  