
const forms = [
    `
    <form id='thank-you-form'>
        <p>Who do you wish to thank?</p>
        <input type='text' name='recipient'>
        <button type='submit>Send</button>
    </form>
    `,
    `
    <form id='invitation-form'>
        <p>Who is invited?</p>
        <input type='text' name='recipient'>
        <button type='submit>Send</button>
    </form>
    `
]


function addForm(type) {

    if (type === 'thankYou') {
        document.getElementById('form-container').innerHTML = forms[0]
    } else if (type === 'invitation') {
        document.getElementById('form-container').innerHTML = forms[1]
    }
}

document.getElementById('thank-you').addEventListener('click', function() {
    addForm('thankYou')

})

document.getElementById('invitation').addEventListener('click', function() {
    addForm('invitation')

})