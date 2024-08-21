document.getElementById('contact-form').addEventListener('submit', function(e) {
e.preventDefault();

const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;


    if(name && phone) {
        const contactList = document.getElementById('contact-list');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${name} - ${phone}</span><button onclick="removeContact(this)">Remover</button>`;

        contactList.appendChild(listItem);

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }

});

function removeContact(button) {
    const listItem = button.parentElement;
    listItem.remove();
}