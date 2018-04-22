const CharacterView = function(selectElement, characterContainer) {
  this.selectElement = selectElement;
  this.characterContainer = characterContainer;
}

CharacterView.prototype.renderSelect = function (characterData) {
  characterData.forEach((character, index) => {
    const characterOption = document.createElement('option');
    characterOption.textContent = character.name;
    characterOption.value = index;
    this.selectElement.appendChild(characterOption);
  })
};

CharacterView.prototype.renderDetail = function (character) {
    const characterName = document.createElement('h3');
    characterName.textContent = `Name is: ${character.name}`;

    const characterSpecies = document.createElement('h3');
    characterSpecies.textContent = `Species: ${character.species}`;

    const characterWandWood = document.createElement('h3');
    characterWandWood.textContent = `Wand made from: ${character.wand.wood} wood`;

    const characterWandCore = document.createElement('h3');
    characterWandCore.textContent = `Wand core is: ${character.wand.core}`;

    const characterWandLength = document.createElement('h3');
    characterWandLength.textContent = `Wand length: ${character.wand.length}`;

    const characterImage = document.createElement('img');
    characterImage.src = character.image;
    characterImage.alt = character.name;

    this.characterContainer.appendChild(characterName);
    this.characterContainer.appendChild(characterSpecies);
    this.characterContainer.appendChild(characterWandWood);
    this.characterContainer.appendChild(characterWandCore);
    this.characterContainer.appendChild(characterWandLength);
    this.characterContainer.appendChild(characterImage);

};

module.exports = CharacterView;
