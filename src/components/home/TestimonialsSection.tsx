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
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata <span className="text-gradient">Mereka</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Testimoni dari siswa dan orang tua yang telah menggunakan BimbelKu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-tutor relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
