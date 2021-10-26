//-----------------------------DWEB API´s-------------------------

const $cards = document.querySelector('.cards')
const $newCard = document.createElement('figure')

$newCard.classList.add('card')

// $newCard.innerHTML = `
// 	<img src="https://placeimg.com/200/200/any" alt="Any" />
// 	<figcaption>Any</figcaption>
// `;



// Modificando Elementos (nuevo estilo)

    // $cards.insertAdjacentElement('beforebegin',$newCard)    // insertame el elemento antes del cards

    // $cards.insertAdjacentElement('afterbegin',$newCard)  // insertame el elemento como primer hijo de cards

    // $cards.insertAdjacentElement('beforeend',$newCard)   // insetame el elemento como el ultimo hijo de cards

    // $cards.insertAdjacentElement('afterend',$newCard)    // insetame el elemento despues de cards


    let $contendCard = `
        <img src="https://placeimg.com/200/200/any" alt="Any" />
        <figcaption></figcaption>
    `;

    $newCard.insertAdjacentHTML('beforeend', $contendCard)

    $newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')

    // $cards.insertAdjacentElement('afterbegin', $newCard)


// Insertando el elementos con médodos usados en JQUERY

    $cards.prepend($newCard)
    // $cards.append($newCard)
    // $cards.after($newCard)
    // $cards.before($newCard)