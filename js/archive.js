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
        05, 'I dub thee sir knight.jpg', 'I dub thee sir Knight', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        06, 'moments before disaster.jpg', 'Moments before disaster', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        07, 'rtx mode.jpg', 'RTX Mode', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        08, 'the most powerful eyes in the universe.jpg', 'The most powerful eyes in the Univers', 'FROM',
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
        11, 'Good one man, that was so funny.png', 'Good one man, that was so funny', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        12, 'Black guy disappointed.jpg', 'Black guy disappointed', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
    new meme(
        13, 'Disapointed guy.jpg', 'Disapointed guy', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR', 'ABOUT',
        'Description'),
]

// Create a new card for every item in the memes array
memes.forEach(meme => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h5 = document.createElement('h5')

    div.dataset.id = meme.id;
    div.classList.add('card')
    div.classList.add('pointer')
    img.setAttribute('src', `../img/${meme.img}`)
    img.setAttribute('alt', meme.img)
    h5.classList.add('caption')
    h5.innerText = meme.caption

    div.append(h5)
    div.append(img)
    cards.append(div)
})

const toggleCards = (crd, crdDtl) => {
    if(crd.style.display == 'none') {
        crd.style.display = ''
        crdDtl.style.display = 'none'
    } else {
        crd.style.display = 'none'
        crdDtl.style.display = 'block'
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
    cardDetails.querySelector('#author').innerHTML = `<span class="bold">About</span>: ${cd.author}`
    cardDetails.querySelector('#about').innerHTML = `<span class="bold">About</span>: ${cd.about}`
    cardDetails.querySelector('#desc').innerHTML = `<span class="bold">Description</span>: ${cd.description}`
}))
