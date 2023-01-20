import { User } from './classes/User.js';
import { Book } from './classes/Book.js';

window.addEventListener("DOMContentLoaded", function(){  
    
                                // User //
    // User Set //
    
    let user1 = new User(1, "Test", "test@gmail.com", "1234", "Marc", "Jhon", "");
    let user2 = new User(2, "Test", "test1@gmail.com", "1234", "Robert", "Jhon", "");
    let user3 = new User(3, "Test2", "test2@gmail.com", "1234", "Marie", "Jhon", "");
    
    let users = [];
    users.push(user1, user2, user3);
    //console.log(users);
    let usersJSON = JSON.stringify(users);
    sessionStorage.setItem("userStorage",  usersJSON);
    
    // User Get //
    
    let usersParse = JSON.parse(sessionStorage.getItem("userStorage",  usersJSON));
    let usersParseSession = [];
    
    for(let i = 0; i < usersParse.length; i++){
        let newUsersParse = JSON.parse(usersParse[i]);
        let newUsers = new User(newUsersParse.id, newUsersParse.username, newUsersParse.email, newUsersParse.password, newUsersParse.firstname, newUsersParse.lastname, newUsersParse.profileImage);
        usersParseSession.push(newUsers);
    }
    
    console.log(usersParseSession);
                                
    
    
    
                                                 // Book //
    
    // Session Storage //
    
    
    let book1 = new Book(
                        1,
                        " Le seigneur des anneaux, tome 1 : La communauté de l'anneau ",
                        "J.R.R. Tolkien",
                        "03/03/2005",
                        "704 pages ",
                        "Le Tiers Age touche à sa fin, et la Terre du Milieu à son crépuscule.",
                        "https://www.babelio.com/couv/CVT_Le-Seigneur-des-Anneaux-Tome-1--La-Communaute-de-_7762.jpg",
                        );
                        
    let book2 = new Book(
                        2,
                        "L'assassin royal, tome 1 : L'apprenti assassin ",
                        "Robin Hobb",
                        "01/12/2005",
                        "510 pages ",
                        "Au château de Castelcerf le roi Subtil Loinvoyant règne sur les Six Duchés ; il est aidé dans sa lourde tâche par son fils Chevalerie qui, comme son père et tous les nobles du royaume, porte le nom de la qualité que ses parents espéraient le voir développer.",
                        "https://www.babelio.com/couv/CVT_15529_834672.jpg"
                        );
                        
    let book3 = new Book(
                        3,
                        "Harry Potter, tome 6 : Harry Potter et le prince de sang mêlé ",
                        "J. K. Rowling",
                        "07/09/2006",
                        "751 pages",
                        "Dans un monde de plus en plus inquiétant, Harry se prépare à retrouver Ron et Hermione.",
                        "https://www.babelio.com/couv/CVT_10230_671174.jpg"
                        );
                        
    let books = [];
    books.push(book1, book2, book3);
    let booksJSON = JSON.stringify(books);
    sessionStorage.setItem("booksStorage", booksJSON);
    
    
    // Get Storage //
    let booksParse = JSON.parse(sessionStorage.getItem("booksStorage", booksJSON));
    let booksParseSession = [];
    
    for(let j = 0; j < booksParse.length; j++){
        let newBookParse = JSON.parse(booksParse[j]);
        let newBook = new Book(newBookParse.id, newBookParse.title, newBookParse.author, newBookParse.publicationDate, newBookParse.totalPages, newBookParse.excerpt, newBookParse.coverImage);
        booksParseSession.push(newBook);
    }
    
    console.log(booksParseSession);
     
    
    
    
});