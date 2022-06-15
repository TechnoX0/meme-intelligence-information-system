const cardDetails = document.getElementById('card-details')
const cards = document.getElementById('cards')

class meme {
    constructor(img, caption, from, popularizedOn, OGPost, author, about, description, refArr) {
        this.img = img
        this.caption = caption
        this.from = from
        this.popularizedOn = popularizedOn
        this.OGPost = OGPost
        this.author = author
        this.about = about
        this.description = description
        this.refArr = refArr
    }
}

const memes = [
    new meme(
        'I Wish All Lesbians a Very Pleasant Evening.png', 'I Wish All Lesbians a Very Pleasant Evening', 'Looney Tunes',
        'October 8th, 2020', 'Tumblr',
        'sunshineofyourlove1967',
        'I Wish All Lesbians a Very Pleasant Evening refers to a snowclone meme based on an image of Bugs Bunny in a tuxedo',
        'This one uses to wish something, usually a pleasant evening, to a person or group',
        [
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/191/147.jpg',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/190/bdc.jpg',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/192/057',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/194/5df',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/189/ea8.jpg',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/193/b24.jpg',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/193/b24.jpg',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/953/193/b24.jpg',
        ]),
    new meme(
        'Spanish guy laughing.jpg', 'When I got to the beach the tide has risen', 'Ratones Coloraos',
        'March 28th, 2014', 'YouTube',
        'Thursday Comics',
        'He burst into laughter after telling a humorous anecdote about throwing kitchen pans into the sea while working at a beach restaurant as a young man',
        'This just tells you to be responsible for your actions and tend to them when needed',
        [

        ]),
    new meme(
        'Disapointed guy.jpg', '(•_•)\n<) )>\n/ \\', 'Cricket World Cup',
        'June 12th, 2019', 'Facebook',
        'Akhtar',
        'Appearing annoyed and dismayed due to disappointing reasons',
        'This meme acts as an reminder that you should not be doing things what you should not do otherwise this man shall be disappointed in you',
        [
            
        ]),
    new meme(
        'I Wish I Was At Home.jpg', 'I Wish I Was At Home playing videogames', 'That Feel Guy',
        'October 22nd, 2011', 'Sad and Useless',
        'Jedi Mocro',
        'I Wish I Was At Home playing videogames is an exploitable comic series where the main character in the corner of the party is pondering that he should\'ve been playing videogames instead of being there making the party for him a nuisance.',
        'It is depicted as anxious and uncomfortable at parties and other social situations. It alludes to one\'s feelings of self-worth and inadequacy when around strangers.',
        [
            
        ]),
    new meme(
        'Vanya and Five Drive By Each Other.jpg', 'Vanya and Five Drive By Each Other', 'The Umbrella Academy',
        'August 6th, 2020', 'Facebook',
        'Erika Quimson',
        'In one scene of the episode, character Vanya Hargreeves and character Number Five drive by each other in their cars and are surprised to see each other',
        'This represents an unexpected event that may holds significance in your life',
        [
            
        ]),
    new meme(
        'Babe Please Stop.jpg', 'Babe Please Stop', 'Magical Girl Site',
        'October 19th, 2020', 'Facebook',
        'gokin32',
        'A girl begging her boyfriend to stop doing something, and stop ignoring her',
        'This depicts where a man has a priority over something rather than the other',
        [
            
        ]),
    new meme(
        'Distracted Boyfriend.jpg', 'Distracted Boyfriend', 'iStock',
        'February 23rd, 2017', 'Instagram',
        '_dekhbai_',
        'A man looks at the backside of a woman walking by while another woman, presumably his romantic partner, looks on disapprovingly.',
        'This as the image shows how a man falls in love to another girl depicting their weak relationship with the girl it makes you contemplate on how you view your relationships whether or not they were weak or not.',
        [
            
        ]),
    new meme(
        'Disappointed Black Guy.jpg', 'Disappointed Black Guy', 'Tediferous',
        'August 12th, 2018', 'Tumblr',
        'tediferous',
        'A happy, excited man. The third panel usually reveals the full picture of the first panel, which is different and unappealing, followed by a picture of the same person, but now with an expression of disappointment or shock',
        'Never celebrate too early',
        [
            
        ]),
    new meme(
        'Confused Nick Young.jpg', 'Confused Nick Young', 'NBA',
        'July 13th, 2015', 'YouTube',
        'WorldStarFunny',
        'Has question marks surrounding his head to express confusion online',
        'This makes a man contemplate about his knowledge on why he was confused',
        [
            
        ]),
    new meme(
        'roll safe.jpg', 'Roll safe', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR',
        'ABOUT',
        'Description',
        [
            
        ]),
    new meme(
        'roll safe.jpg', 'Roll safe', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR',
        'ABOUT',
        'Description',
        [
            
        ]),
    new meme(
        'roll safe.jpg', 'Roll safe', 'FROM',
        'DATE', 'MEDIA',
        'AUTHOR',
        'ABOUT',
        'Description',
        [
            
        ]),
]

// Create a new card for every item in the memes array
memes.forEach((meme, index) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    
    div.dataset.id = index+1;
    div.classList.add('card')
    div.classList.add('pointer')
    img.setAttribute('src', `img/${meme.img}`)
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

// Change the text of the info card
const cardItem = document.querySelectorAll('.card')
cardItem.forEach(card => card.addEventListener('click', () => {
    const referenceImgs = cardDetails.querySelector('#reference-imgs')
    const referenceLinks = cardDetails.querySelector('#reference-links')
    let cd;
    memes.forEach((mm, ii) => ii + 1 == card.dataset.id ? cd = mm: false)

    cardDetails.querySelector('#img').src = `img/${cd.img}`
    cardDetails.querySelector('#caption').innerText = cd.caption
    cardDetails.querySelector('#from').innerHTML = `<span class="bold">From</span>: ${cd.from}`
    cardDetails.querySelector('#popular-on').innerHTML = `<span class="bold">Popularrized On</span>: ${cd.popularizedOn}`
    cardDetails.querySelector('#og-post').innerHTML = `<span class="bold">Original Post</span>: ${cd.OGPost}`
    cardDetails.querySelector('#author').innerHTML = `<span class="bold">Author</span>: ${cd.author}`
    cardDetails.querySelector('#about').innerHTML = `<span class="bold">About</span>:<br>&emsp; ${cd.about}`
    cardDetails.querySelector('#desc').innerHTML = `<span class="bold">Description</span>:<br>&emsp; ${cd.description}`

    if(cd.refArr.length) {
        cd.refArr.forEach(ref => {
            let img, a
    
            img = document.createElement('img')
            img.setAttribute('src', ref)
            referenceImgs.append(img)
    
            dd = document.createElement('dd')
            a = document.createElement('a')
            a.setAttribute('href', ref)
            a.setAttribute('target', '_blank')
            a.innerText = ref
            dd.append(a)
            referenceLinks.append(dd)
        })
    } else {
        while(referenceImgs.lastChild || referenceLinks.lastChild) {
            referenceImgs.removeChild(referenceImgs.lastChild)
            referenceLinks.removeChild(referenceLinks.lastChild)
        }
    }
    toggleCards(cards, cardDetails)
}))


// ========== Simple search system ==========
const searchInput = document.getElementById('search-input')

searchInput.addEventListener('keyup', () => {
    let input, filter, cards
    input = document.getElementById('search-input').value
    filter = input.toUpperCase()
    cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        let p, txt
        p = card.querySelector('p')
        txt = p.innerText || p.textContent
        if(txt.toUpperCase().indexOf(filter) > -1) {
            card.style.display = ''
        } else {
            card.style.display = 'none'
        }
    })
})