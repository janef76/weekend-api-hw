const CharacterData = require('./models/character_data.js');
const CharacterView = require('./views/character_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const characterSelect = document.querySelector('#character-select');
  const characterContainer = document.querySelector('#character-detail-view');
  const characterView = new CharacterView(characterSelect, characterContainer);

  const houseSelect = document.querySelector('#character-house-select');


  const characterData = new CharacterData();

  characterSelect.addEventListener('change', (evt) => {
    characterContainer.innerHTML = '';
    const selectedIndex = evt.target.value;
    const selectedCharacter = characterData.data[selectedIndex];
    characterView.renderDetail(selectedCharacter);
  })

  characterData.getData((data) => {
    characterView.renderSelect(data)
  });

});
