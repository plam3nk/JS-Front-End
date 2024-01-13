window.addEventListener("load", solve);

function solve() {
  const previewList = document.getElementById('preview-list')
  const candidatesList = document.getElementById('candidates-list')

  const nextBtn = document.getElementById('next-btn');
  const studentInput = document.getElementById('student');
  const universityInput = document.getElementById('university');
  const scoreInput = document.getElementById('score');

  nextBtn.addEventListener('click', addPreview);

  function addPreview(event) {
    let isEmpty = studentInput.value === '' || universityInput.value === '' || scoreInput.value === ''

    if (!isEmpty) {
      event.preventDefault();
      const listItem = document.createElement('li');
      listItem.classList.add('application');

      const articleItem = document.createElement('article');

      const header = document.createElement('h4');
      header.textContent = studentInput.value;

      const universityParagraph = document.createElement('p');
      universityParagraph.textContent = `University: ${universityInput.value}`;

      const scoreParagraph = document.createElement('p');
      scoreParagraph.textContent = `Score: ${scoreInput.value}`;

      const editBtn = document.createElement('button');
      editBtn.classList.add('action-btn');
      editBtn.classList.add('edit');
      editBtn.textContent = 'edit'

      const applyBtn = document.createElement('button');
      applyBtn.classList.add('action-btn');
      applyBtn.classList.add('apply');
      applyBtn.textContent = 'apply'

      articleItem.appendChild(header);
      articleItem.appendChild(universityParagraph);
      articleItem.appendChild(scoreParagraph);

      listItem.appendChild(articleItem);
      listItem.appendChild(editBtn);
      listItem.appendChild(applyBtn);

      previewList.appendChild(listItem);

      clearForm();
      nextBtn.disabled = true;

      editBtn.addEventListener('click', (e) => {
        const studentName = previewList.querySelector('h4').textContent;
        const paragraphElements = previewList.querySelectorAll('article p');

        const [universityPElement, scorePElement] = Array.from(paragraphElements);
        // Move values from preview to input.
        studentInput.value = studentName
        universityInput.value = universityPElement.textContent.split(': ')[1];
        scoreInput.value = scorePElement.textContent.split(': ')[1];

        previewList.innerHTML = '';
        nextBtn.removeAttribute('disabled')


      })

      applyBtn.addEventListener('click', (e) => {
        editBtn.remove();
        applyBtn.remove();

        candidatesList.appendChild(listItem);

        previewList.innerHTML = '';

        nextBtn.removeAttribute('disabled')
      })

    }
  }

  function clearForm() {
    studentInput.value = '';
    universityInput.value = '';
    scoreInput.value = '';
  }

}
