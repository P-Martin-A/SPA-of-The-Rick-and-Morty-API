import getData from '../assets/utils/getData';

const HOME = async () => {
  const CHARACTERS = await getData()
  const VIEW = CHARACTERS.results.map(character => `
    <article class="main_character">
      <a class="main_character-container-item" href="#/${character.id}">
        <figure class="main_character-container-item">
          <img class="main_character-container-item-image" src="${character.image}" alt="${character.name}">
          <figcaption class="main_character-container-item-name">${character.name}</figcaption>
        </figure>
      </a>
    </article>  
  `).join('')

  return VIEW
}

export default HOME