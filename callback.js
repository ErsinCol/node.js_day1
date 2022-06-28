// create array
/*
const books=[
    {name: 'Kitap 1',author: 'Yazar 1'},
    {name: 'Kitap 2',author: 'Yazar 2'},
    {name: 'Kitap 3',author: 'Yazar 3'}
];


// map methodu ile diziyi listeleme 
const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}

const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'kitap 4',author:'yazar 4'},listBooks);
*/


const books=[
    {name: 'Kitap 1',author: 'Yazar 1'},
    {name: 'Kitap 2',author: 'Yazar 2'},
    {name: 'Kitap 3',author: 'Yazar 3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}

const addBook = (newBook) => {
    const promise1=new Promise((resolve,reject)=>{
        books.push(newBook);
        // resolve(books);
        reject('Bir hata oluştu.')
    })

    return promise1;
};

addBook({name: 'kitap 4',author:'yazar 4'})
    .then(()=>{
        console.log('Yeni liste ');
        listBooks();
    }).catch((error)=>{
        console.log(error);
    })