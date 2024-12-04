$(document).ready(function() {
    $('#orderForm').on('submit', function(event) {
        event.preventDefault();

        // Get form data
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var newsletter = $('#newsletter').is(':checked');
        var books = [];
        $('#books input:checked').each(function() {
            books.push($(this).val());
        });

        // Validate email and phone
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
        var phonePattern = /^\+?[0-9]{10,15}$/;

        if (!emailPattern.test(email)) {
            $('#modalBody').text('Некорректный адрес электронной почты.');
            $('#resultModal').modal('show');
            return;
        }

        if (!phonePattern.test(phone)) {
            $('#modalBody').text('Некорректный номер телефона.');
            $('#resultModal').modal('show');
            return;
        }

        // Log data to console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Newsletter:', newsletter);
        console.log('Books:', books);

        // Show success message
        $('#modalBody').text('Данные формы успешно обработаны и отправлены.');
        $('#resultModal').modal('show');
    });
});

function addToCart(bookId) {
    const button = document.getElementById(`addToCart${bookId}`);
    if (button.innerText === 'Добавить в корзину') {
        button.innerText = 'Добавлено!';
    } else {
        button.innerText = 'Добавить в корзину';
    }
}

function viewDetails(bookId) {
    // Здесь можно добавить логику для просмотра подробностей книги
    alert(`Подробности книги ${bookId}`);
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const author = card.querySelector('p').innerText.toLowerCase();
        if (title.includes(query) || author.includes(query)) {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}
