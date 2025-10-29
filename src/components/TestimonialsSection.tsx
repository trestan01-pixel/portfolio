// src/components/TestimonialsSection.tsx

const testimonialsData = [
  {
    quote: "Руслан — не просто менеджер, он системный архитектор. Он пришел в стартап и с нуля выстроил всю IT-экосистему и операционные процессы, что позволило нам выйти в окупаемость уже через год.",
    author: "Александр Мителкин",
    title: "Директор, Karso",
  },
  {
    quote: "Благодаря IT-стратегии и data-driven подходу, который внедрил Руслан, наша компания смогла вырасти в 3 раза. Его способность превращать хаос в управляемую систему — уникальна.",
    author: "Константин Усанов",
    title: "Исполнительный директор, Medion",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2c3e50] mb-16">
          Рекомендации
        </h2>
        <div className="space-y-12">
          {testimonialsData.map((testimonial, index) => (
            <figure key={index} className="text-center">
              <blockquote className="text-xl italic text-gray-700 before:content-['“'] before:mr-1 after:content-['”'] after:ml-1">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-bold text-[#2c3e50]">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}