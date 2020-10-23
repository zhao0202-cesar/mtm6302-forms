
const forms = [
    `
    <form id='thank-you-form'>
        <p>Who do you wish to thank?</p>
        <input type='text' name='recipient'>
        <button type='submit'>Send</button>
    </form>
    `,
    `
    <form id='invitation-form'>
        <p>Who is invited?</p>
        <input type='text' name='recipient'>
        <button type='submit'>Send</button>
    </form>
    `
]

const cards = [
    `
    <h1>Thank You Card</h1>
    <p>Thank you <span id='name'></span>!</p>
    `, 
    `
    <h1>Invitation Card</h1>
    <p>Hey <span id='name'></span>, you're invited!</p>
    `
]


function addForm(type) {

    if (type === 'thankYou') {
        document.getElementById('form-container').innerHTML = forms[0]

        let $form = document.getElementById('thank-you-form')

        $form.addEventListener('submit', function (event) {

            document.getElementById('card-container').innerHTML = cards[0]

            document.getElementById('name').textContent = $form.elements[0].value

            event.preventDefault()
        })

    } else if (type === 'invitation') {
        document.getElementById('form-container').innerHTML = forms[1]

        let $form = document.getElementById('invitation-form')

        $form.addEventListener('submit', function (event) {

            document.getElementById('card-container').innerHTML = cards[1]

            document.getElementById('name').textContent = $form.elements[0].value

            event.preventDefault()
        })
    }
}

document.getElementById('thank-you').addEventListener('click', function() {
    addForm('thankYou')

})

document.getElementById('invitation').addEventListener('click', function() {
    addForm('invitation')

})