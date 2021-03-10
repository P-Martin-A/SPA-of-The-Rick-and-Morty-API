import getData from '../assets/utils/getData'
import getHash from '../assets/utils/getHash'

const CHARACTER = async () => {
  const ID = getHash(),
        CHARACTER = await getData(ID)

  const VIEW = `
    <section class="main_section-character">
      <figure class="main_section-character-card">
        <img class="main_section-character-card-image" src="${CHARACTER.image}" alt="${CHARACTER.name}">
        <figcaption class="main_section-character-card-name">${CHARACTER.name}</figcaption>
      </figure>
      <article class="main_section-character-info">
        <ul class="main_section-character-info-list">
          <li class="main_section-character-info-list-item">Episodios: <span>${CHARACTER.episode.length}</span></li>
          <li class="main_section-character-info-list-item">Estado: <span>${CHARACTER.status}</span></li>
          <li class="main_section-character-info-list-item">Especie: <span>${CHARACTER.species}</span></li>
          <li class="main_section-character-info-list-item">Genero: <span>${CHARACTER.gender}</span></li>
          <li class="main_section-character-info-list-item">Origen: <span>${CHARACTER.origin.name}</span></li>
          <li class="main_section-character-info-list-item">Última Localización: <span>${CHARACTER.location.name}</span></li>
        </ul>
      </article>
    </section>
  `

  return VIEW
}

export default CHARACTER