function solve() {
  let text = document.getElementById('text').value
  let arrayText = text.split(' ')
  let convention = document.getElementById('naming-convention').value


  let result = ''

  if (convention === "Camel Case") {
    let counter = 0;
    for (const word of arrayText) {
      lowerCaseWord = word.toLowerCase()
      if (counter > 0) {
        lowerCaseWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
      }
      result += lowerCaseWord
      counter += 1
    } 
  } else if (convention === "Pascal Case") {
    for (const word of arrayText) {
      lowerCaseWord = word.toLowerCase()
      lowerCaseWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
      result += lowerCaseWord
    } 
  } else {
    result += "Error!"
  }

  document.getElementById('result').textContent = result
}