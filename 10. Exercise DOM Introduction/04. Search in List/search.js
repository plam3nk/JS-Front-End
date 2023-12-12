function search() {
   let listItems = Array.from(document.querySelectorAll('li'));
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   
   for (const item of listItems) {
      if (item.textContent.includes(searchText)) {
         matches++
         item.style.fontWeight = 'bold'
         item.style.textDecoration = 'underline'
      }
   }

   result.textContent = `${matches} matches found`
}
