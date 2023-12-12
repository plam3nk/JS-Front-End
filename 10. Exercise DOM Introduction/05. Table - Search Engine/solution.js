function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let listItems = Array.from(document.querySelectorAll('tbody tr'));
   let searchText = document.getElementById('searchField');

   function onClick() {

      for (const item of listItems) {
         item.classList.remove('select')
         if (searchText.value !== '' && item.innerHTML.includes(searchText.value)) {
            item.className = 'select';
         }
      }

      searchText.value = '';
   }
}