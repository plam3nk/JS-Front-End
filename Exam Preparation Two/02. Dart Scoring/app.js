window.addEventListener("load", solve);

function solve() {
  const scoreContainer = document.getElementById('sure-list');
  const playerContainer = document.getElementById('scoreboard-list');
  const nameInput = document.getElementById('player');
  const scoreInput = document.getElementById('score');
  const roundInput = document.getElementById('round');
  const addBtn = document.getElementById('add-btn');
  const clearBtn = document.getElementsByClassName('clear')[0];

  addBtn.addEventListener('click', addScore);

  function addScore(e) {
    let isValid = nameInput.value === '' || scoreInput.value === '' || roundInput.value === ''

    if (!isValid) {
      const listItem = document.createElement('li');
      listItem.classList.add('dart-item')
      const articleItem = createElement(nameInput, scoreInput, roundInput);

      const editBtn = document.createElement('button');
      editBtn.textContent = 'edit';
      editBtn.classList.add('btn');
      editBtn.classList.add('edit');

      const okBtn = document.createElement('button');
      okBtn.textContent = 'ok';
      okBtn.classList.add('btn');
      okBtn.classList.add('ok');

      listItem.appendChild(articleItem)
      listItem.appendChild(editBtn)
      listItem.appendChild(okBtn)

      scoreContainer.appendChild(listItem)

      addBtn.disabled = true;
      nameInput.value = '';
      scoreInput.value = '';
      roundInput.value = '';

      editBtn.addEventListener('click', () => {
        const [name, score, round] = articleItem.children;
        const numberScore = score.textContent.split(': ')[1];
        const numberRound = round.textContent.split(': ')[1];

        nameInput.value = name.textContent;
        scoreInput.value = numberScore;
        roundInput.value = numberRound;

        scoreContainer.innerHTML = '';
        addBtn.removeAttribute('disabled')
      })

      okBtn.addEventListener('click', () => {
        editBtn.remove();
        okBtn.remove();

        playerContainer.appendChild(listItem)
        scoreContainer.innerHTML = '';

        addBtn.removeAttribute('disabled')

        clearBtn.addEventListener('click', () => {
          window.location.reload()
        })

      })
    }
  }

  function createElement(name, score, round) {
    const article = document.createElement('article');

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = name.value;
    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Score: ${score.value}`;
    const roundParagraph = document.createElement('p');
    roundParagraph.textContent = `Round: ${round.value}`;

    article.appendChild(nameParagraph);
    article.appendChild(scoreParagraph);
    article.appendChild(roundParagraph);

    return article;
  }
}

