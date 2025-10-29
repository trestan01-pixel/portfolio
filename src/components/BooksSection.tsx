// src/components/BooksSection.tsx

const booksData = [
  {
    title: "Цель",
    author: "Элияху Голдратт",
    coverUrl: "https://avatars.mds.yandex.net/get-entity_search/5574192/551792709/S600xU_2x", // Пример обложки
  },
  {
    title: "Высокоэффективный менеджмент",
    author: "Эндрю Гроув",
    coverUrl: "https://i1.helikon.bg/products/6704/20/206704/206704_b.jpg", // Пример обложки
  },
  {
    title: "От хорошего к великому",
    author: "Джим Коллинз",
    coverUrl: "https://avatars.mds.yandex.net/i?id=1b3a23ad1252cfc3297e70be1875d087_l-6961846-images-thumbs&n=13", // Пример обложки
  },
];

export default function BooksSection() {
  return (
    // ИЗМЕНЕНО: Фон стал белым, основной текст - темным
    <section className="bg-white text-[#2c3e50] py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* ИЗМЕНЕНО: Заголовку явно задан темный цвет, чтобы он был виден */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#2c3e50]">
          Любимые книги
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {booksData.map((book, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
              <img src={book.coverUrl} alt={`Обложка книги ${book.title}`} className="w-full h-full object-cover aspect-[2/3]" />
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg text-white">{book.title}</h3>
                <p className="text-sm text-gray-300">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}