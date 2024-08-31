const grid = document.querySelector('.grid');

const characters = [
    'Albedo',
    'Alhaitham',
    'Amber',
    'Ayaka',
    'Ayato',
    'Baizhu',
    'Barbara',
    'Beidou',
    'Bennett',
    'Candace',
    'Charlotte',
    'Chevreuse',
    'Chongyun',
    'Collei',
    'Cyno',
    'Dehya',
    'Diluc',
    'Diona',
    'Dori',
    'Eula',
    'Faruzan',
    'Fischl',
    'Furina',
    'Ganyu',
    'Gorou',
    'Hutao',
    'Itto',
    'Jean',
    'Kaeya',
    'Kaveh',
    'Kazuha',
    'Keqing',
    'Kirara',
    'Klee',
    'Kokomi',
    'Layla',
    'Lisa',
    'Lynette',
    'Lyney',
    'Mona',
    'Nahida',
    'Navia',
    'Neuvillette',
    'Nilou',
    'Ningguang',
    'Noelle',
    'Qiqi',
    'Raiden',
    'Razor',
    'Sara',
    'Sayu',
    'Shenhe',
    'Shinobu',
    'Sucrose',
    'Tartaglia',
    'Thoma',
    'Tighnari',
    'Venti',
    'Wanderer',
    'Wriothesley',
    'Xiangling',
    'Xingqiu',
    'Yae',
    'Yanfei',
    'Yaoyao',
    'Yelan',
    'Yoimiya',
    'Yunjin',
    'Zhongli',
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const revealCard = ({target}) => {
    
    

}


const createCard = (character) => {

 const card = createElement('div', 'card');
 const front = createElement('div', 'face front');
 const back = createElement('div', 'face back');

 front.style.backgroundImage = `url(../images-cards/${character}.png)`

 card.appendChild(front);
 card.appendChild(back);

 card.addEventListener('click', revealCard);

return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );

    Math.random()

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });

}

loadGame();