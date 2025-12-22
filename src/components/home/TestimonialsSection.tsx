import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ibu Ratna",
    role: "Orang Tua Siswa SMP",
    content: "Anak saya berhasil naik peringkat di sekolah setelah belajar dengan guru dari BimbelKu. Sangat membantu!",
    rating: 5,
    avatar: "R",
  },
  {
    id: 2,
    name: "Andi Pratama",
    role: "Siswa SMA",
    content: "Guru-guru di sini sangat sabar dan menjelaskan dengan cara yang mudah dipahami. Nilai Matematika saya naik drastis!",
    rating: 5,
    avatar: "A",
  },
  {
    id: 3,
    name: "Pak Hendra",
    role: "Orang Tua Siswa SD",
    content: "Platform yang sangat user-friendly. Mudah mencari guru yang sesuai dengan kebutuhan anak.",
    rating: 5,
    avatar: "H",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Apa Kata <span className="text-gradient">Mereka</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Testimoni dari siswa dan orang tua yang telah menggunakan BimbelKu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-tutor relative">
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 h-6 w-6 md:h-8 md:w-8 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 text-warning fill-warning" />
                ))}
              </div>

              <p className="text-sm md:text-base text-foreground mb-4 md:mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm md:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
