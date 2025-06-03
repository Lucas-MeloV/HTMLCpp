
const personagens = [
    {
        nome: "Sung Jin-Woo",
        imagem: "https://criticalhits.com.br/wp-content/uploads/2025/01/Solo-Leveling-Reawakening-Movie-696x392.jpg",
        descricao: "O protagonista que evolui de caçador E para o mais poderoso soberano das sombras.",
        rank: "Rank S+",
        badgeClass: "bg-primary"
    },
    {
        nome: "Cha Hae-In",
        imagem: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/cha-hae-in-featured-image.jpg",
        descricao: "Uma caçadora de elite, admirada por sua força e por ser uma das únicas a confiar em Jin-Woo.",
        rank: "Rank S",
        badgeClass: "bg-warning text-dark"
    },
    {
        nome: "Go Gun-Hee",
        imagem: "https://images.mein-mmo.de/medien/2025/05/solo-leveling-go-gun-hee-1.jpg",
        descricao: "Presidente da Associação de Caçadores, um verdadeiro símbolo de autoridade e poder oculto.",
        rank: "Rank Nacional",
        badgeClass: "bg-danger"
    },
    {
        nome: "Baek Yoon-Ho",
        imagem: "https://images3.alphacoders.com/135/1357330.jpeg",
        descricao: "Líder da Guilda Branco-Tigre, possui sentidos aguçados e forma de besta feroz.",
        rank: "Rank S",
        badgeClass: "bg-warning text-dark"
    },
    {
        nome: "Jin-Ah",
        imagem: "https://staticg.sportskeeda.com/editor/2025/03/1a0c8-17417573566800-1920.jpg?w=640",
        descricao: "Irmã mais nova de Jin-Woo. Seu bem-estar é uma das motivações do protagonista.",
        rank: "Civil",
        badgeClass: "bg-secondary"
    },
    {
        nome: "Thomas Andre",
        imagem: "https://i.ytimg.com/vi/Vwo0RC1bw6s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAU0A5ZgCz4YWZlWRyMcc9wrzH_dA",
        descricao: "Um dos caçadores mais fortes do mundo. Usa força bruta como principal recurso.",
        rank: "Rank Nacional",
        badgeClass: "bg-danger"
    }
];

const container = document.getElementById("character-container");
const template = document.getElementById("character-card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


// Criar cards
personagens.forEach(personagem => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".character-name").textContent = personagem.nome;
    clone.querySelector(".character-img").src = personagem.imagem;
    clone.querySelector(".character-img").alt = personagem.nome;
    clone.querySelector(".character-description").textContent = personagem.descricao;

    const badge = clone.querySelector(".character-rank");
    badge.textContent = personagem.rank;
    badge.className = `badge character-rank ${personagem.badgeClass}`;

    container.appendChild(clone);
});

// Navegação estilo Netflix
const scrollAmount = 320;

prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Dados (melhorados do seu exemplo)
const temporadas = [
  {
    titulo: "Temporada 1",
    descricao: "A jornada começa com Sung Jin-Woo, um caçador considerado o mais fraco, que enfrenta desafios mortais nas masmorras. Nesta temporada, ele descobre um misterioso sistema que lhe permite evoluir seu poder de forma inimaginável.",
    imagem: "https://www.yourdecoration.com/cdn/shop/files/Poster-Solo-Leveling-Season-1-91-5x61cm-Abystyle-GBYDCO705_500x.jpg?v=1739864560"
  },
  {
    titulo: "Temporada 2",
    descricao: "Conforme Jin-Woo se fortalece, ele enfrenta inimigos cada vez mais poderosos e revela segredos sombrios sobre o mundo das caçadas. As batalhas intensas e as alianças inesperadas marcam essa fase da série.",
    imagem: "https://a.storyblok.com/f/178900/1920x1080/cdf83a3e19/solo-leveling-season-2-key-visual-wide.png/m/1200x0/filters:quality(95)format(webp)"
  },
  {
    titulo: "Temporada 3",
    descricao: "Segredos antigos vêm à tona, e Jin-Woo deve enfrentar ameaças que colocam em risco toda a humanidade. A temporada traz batalhas épicas, reviravoltas e o verdadeiro significado do poder solo.",
    imagem: "https://i.ytimg.com/vi/6mplyOlixhg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAdfL8Pn0uIFtauwI2VCwP4u8mqTQ"
  }
];

const curiosidades = [
  {
    titulo: "Origem da Série",
    texto: "Solo Leveling começou como uma web novel escrita por Chugong em 2016, que rapidamente ganhou uma enorme base de fãs antes de ser adaptada para webtoon em 2018."
  },
  {
    titulo: "Sucesso Mundial",
    texto: "A série é um dos webtoons sul-coreanos mais populares internacionalmente, com milhões de leitores ao redor do mundo e uma base fiel de fãs que aguarda ansiosamente cada capítulo."
  },
  {
    titulo: "Adaptação em Anime",
    texto: "A primeira temporada do anime Solo Leveling foi lançada em 2023, conquistando críticas positivas por sua animação de alta qualidade e fidelidade à história original."
  },
  {
    titulo: "Influência na Cultura Pop",
    texto: "Solo Leveling inspirou diversos jogos, mercadorias oficiais e até eventos temáticos, consolidando seu lugar na cultura pop asiática e global."
  },
  {
    titulo: "Desenvolvimento do Protagonista",
    texto: "Sung Jin-Woo é um dos protagonistas mais icônicos dos últimos tempos, conhecido pela sua evolução de um caçador fraco a uma força imparável."
  }
];

// Função para renderizar Temporadas
function renderTemporadas() {
  const container = document.querySelector('#temporadas');
  const row = document.createElement('div');
  row.className = "row row-cols-1 row-cols-md-3 g-4";

  temporadas.forEach(temp => {
    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
      <div class="card bg-dark text-light h-100 shadow-sm">
        <img src="${temp.imagem}" class="card-img-top" alt="${temp.titulo}">
        <div class="card-body">
          <h5 class="card-title">${temp.titulo}</h5>
          <p class="card-text">${temp.descricao}</p>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  container.appendChild(row);
}


// Função para renderizar Curiosidades
function renderCuriosidades() {
  const container = document.querySelector('#curiosidades');
  const accordion = document.createElement('div');
  accordion.className = "accordion";
  accordion.id = "curiosidadesAccordion";

  curiosidades.forEach((curio, index) => {
    const item = document.createElement('div');
    item.className = "accordion-item bg-dark text-light";

    item.innerHTML = `
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          ${curio.titulo}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#curiosidadesAccordion">
        <div class="accordion-body">
          ${curio.texto}
        </div>
      </div>
    `;

    accordion.appendChild(item);
  });

  container.appendChild(accordion);
}

// Chamar as funções para renderizar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  renderTemporadas();
  renderCuriosidades();
});
