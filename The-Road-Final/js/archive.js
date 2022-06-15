const cardDetails = document.getElementById('card_details')
const cards = document.getElementById('cards')

class meme {
    constructor(id, img, caption, from, popularizedOn, OGPost, author, about, description, imgArr) {
        this.id = id
        this.img = img
        this.caption = caption
        this.from = from
        this.popularizedOn = popularizedOn
        this.OGPost = OGPost
        this.author = author
        this.about = about
        this.description = description
        this.imgArr = imgArr
    }
}

const memes = [
    new meme(
        01, 'roll safe.jpg', 'Roll safe', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        02, 'disaster girl.jpg', 'Disaster girl', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        03, 'woman yelling at a cat.png', 'Woman yelling at a cat', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        04, 'crying jordan.jpg', 'Crying jordan', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        09, 'Spanish guy laughing.jpg', 'Spanish guy laughing', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        10, 'Run bitch run.jpg', 'Run bitch run', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        13, 'Disapointed guy.jpg', 'Disapointed guy', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        14, 'I Wish All Lesbians a Very Pleasant Evening.png', 'I Wish All Lesbians a Very Pleasant Evening', 'Looney Tunes',
        'October 8th, 2020', 'Tumblr',
        'sunshineofyourlove1967',
        'I Wish All Lesbians a Very Pleasant Evening refers to a snowclone meme based on an image of Bugs Bunny in a tuxedo',
        'This one uses to wish something, usually a pleasant evening, to a person or group'),
    new meme(
        15, 'I Wish I Was At Home.jpg', 'I Wish I Was At Home playing videogames', 'That Feel Guy',
        'October 22nd, 2011', 'Sad and Useless',
        'Jedi Mocro',
        'I Wish I Was At Home playing videogames is an exploitable comic series where the main character in the corner of the party is pondering that he should\'ve been playing videogames instead of being there making the party for him a nuisance.',
        'It is depicted as anxious and uncomfortable at parties and other social situations. It alludes to one\'s feelings of self-worth and inadequacy when around strangers.'),
]

// Create a new card for every item in the memes array
memes.forEach(meme => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')

    div.dataset.id = meme.id;
    div.classList.add('card')
    div.classList.add('pointer')
    img.setAttribute('src', `img/${meme.img}`)
    img.setAttribute('alt', meme.img)
    p.classList.add('caption')
    p.innerText = meme.caption

    div.append(img)
    div.append(p)
    cards.append(div)
})

const toggleCards = (card, cardDtl) => {
    if(card.style.display == 'none') {
        card.style.display = ''
        cardDtl.style.display = 'none'
    } else {
        card.style.display = 'none'
        cardDtl.style.display = 'block'
    }
}

const cardItem = document.querySelectorAll('.card')
cardItem.forEach(card => card.addEventListener('click', () => {
    let cd;
    toggleCards(cards, cardDetails)
    memes.forEach(mm => mm.id == card.dataset.id ? cd = mm: false)

    cardDetails.querySelector('#img').src = `img/${cd.img}`
    cardDetails.querySelector('#caption').innerText = cd.caption
    cardDetails.querySelector('#from').innerHTML = `<span class="bold">From</span>: ${cd.from}`
    cardDetails.querySelector('#popular_on').innerHTML = `<span class="bold">Popularrized On</span>: ${cd.popularizedOn}`
    cardDetails.querySelector('#og_post').innerHTML = `<span class="bold">Original Post</span>: ${cd.OGPost}`
    cardDetails.querySelector('#author').innerHTML = `<span class="bold">Author</span>: ${cd.author}`
    cardDetails.querySelector('#about').innerHTML = `<span class="bold">About</span>: ${cd.about}`
    cardDetails.querySelector('#desc').innerHTML = `<span class="bold">Description</span>: ${cd.description}`
}))
