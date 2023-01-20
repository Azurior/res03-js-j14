import { User } from './classes/User.js';
import { Book } from './classes/Book.js';

window.addEventListener("DOMContentLoaded", function(){  
    let user1 = new User(1, "Azu", "azurior24@gmail.com", "password", "Tony", "Gohin", "");
    let user2 = new User(2, "Test", "test1@gmail.com", "1234", "Robert", "Jhon", "");
    let user3 = new User(3, "Test2", "test2@gmail.com", "1234", "Marie", "Jhon", "");
    
    let users = [];
    users.push(user1, user2, user3);
    let usersJSON = JSON.stringify(users);
    sessionStorage.setItem(usersJSON);
    
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
    sessionStorage.setItem(booksJSON);
    
});