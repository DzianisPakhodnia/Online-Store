import React from "react";
import { ShoppingCart } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Война и мир",
    author: "Лев Толстой",
    price: 19.99,
    image: "https://placehold.co/200x300?text=Война+и+мир",
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    price: 15.49,
    image: "https://placehold.co/200x300?text=Преступление+и+наказание",
  },
  {
    id: 3,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    price: 17.99,
    image: "https://placehold.co/200x300?text=Мастер+и+Маргарита",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Магазин книг</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-1">Автор: {book.author}</p>
              <p className="text-lg font-bold mb-4">${book.price.toFixed(2)}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl w-full flex items-center justify-center gap-2">
                <ShoppingCart size={16} /> В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
