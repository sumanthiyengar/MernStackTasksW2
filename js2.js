function sortStringAlphabetically(inputString) {
    const sortedString = inputString.split('').sort().join('');
    return sortedString;
  }
  const inputString = 'webmaster';
  const sortedResult = sortStringAlphabetically(inputString);
  console.log(sortedResult); 
  