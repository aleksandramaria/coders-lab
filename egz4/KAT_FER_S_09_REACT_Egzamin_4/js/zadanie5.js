$(function () {
    const ebook = $('.ebook');
    console.log(ebook);
    const book = $('.book');
    console.log(book);

    class Product {
        constructor(title, author, selector) {
            this.title = title;
            this.author = author;
            this.selector = selector;
        }
        updateInfo() {
            const pro = $(this.selector);
            const title = pro.find('.title').find('strong');
            const author = pro.find('.author').find('strong');

            title.text(this.title);
            author.text(this.author);
        }
    }

    class Ebook extends Product {
        constructor(title, author, selector) {
            super(title, author);
            this.selector = ebook;
        }
        download() {
            const txt = console.log('Ściąganie... ' + this.title);
            return txt;
        }
    }

    class Book extends Product {
        constructor(title, author, selector) {
            super(title, author);
            this.selector = book;
        }
        order() {
            const txt2 = console.log('Podaj adres dostawy!');
            return txt2;
        }
    }

    const ebook1 = new Ebook('Ciemniejsze niebo', 'Ruben Eliassen', 'ebook');
    const book1 = new Book('Najdłuższa noc', 'Maciej Dancewicz', 'book');

    const download = $('button').first();
    const orderIt = $('button').last();

    download.on('click', function () {
        ebook1.download();
    })

    orderIt.on('click', function () {
        book1.order();
    })

    ebook1.updateInfo();
    book1.updateInfo();


});

