const form = document.getElementById('flashcardForm');
const topicInput = document.getElementById('topic');
const answerInput = document.getElementById('answer');
const cardsContainer = document.getElementById('cardsContainer');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const topic = topicInput.value.trim();
  const answer = answerInput.value.trim();

  if (!topic || !answer) {
    errorDiv.textContent = 'Both topic and answer are required!';
    return;
  }

  errorDiv.textContent = '';
  createFlashcard(topic, answer);

  topicInput.value = '';
  answerInput.value = '';
});

function createFlashcard(topic, answer) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner';

  const front = document.createElement('div');
  front.className = 'card-front';
  front.textContent = topic;

  const back = document.createElement('div');
  back.className = 'card-back';
  back.textContent = answer;

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  cardsContainer.appendChild(card);
}