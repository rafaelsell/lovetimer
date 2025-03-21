import { Timer } from "../components/Timer";
import { ImageSlider } from "../components/ImageSlider";
import { StarRain } from "../components/StarRain";

export const HomePage = () => {
  // Example start date - replace with your actual date
  const startDate = new Date("2024-05-12");

  // Example images - replace with your actual image URLs
  const images = [
    "./photos/1.png",
    "./photos/2.png",
    "./photos/3.png",
    "./photos/4.png",
    "./photos/5.png",
    "./photos/6.png",
    "./photos/7.png",
    "./photos/8.png",
    "./photos/9.png",
    "./photos/10.png",
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <StarRain />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <Timer startDate={startDate} />

          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-pink-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">
              Nossas Memórias
            </h2>
            <ImageSlider images={images} />
          </div>

          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-pink-500/20 backdrop-blur-sm">
            <p className="text-slate-50 leading-relaxed mb-4">
              A gente se conheceu de uma forma nada convencional, em um momento
              difícil para ambos. Você me perguntou se eu acreditava em destino,
              e agora eu te respondo:{" "}
              <span className="font-semibold text-slate-50 italic">
                "Acredito em propósito."
              </span>
              Porque foi através de você que aprendi o verdadeiro significado do
              carinho, do cuidado e da atenção aos detalhes.
            </p>
            <p className="text-slate-50 leading-relaxed mb-4">
              Quero que saiba que, independentemente do tempo ou das
              circunstâncias, sempre quero ter você ao meu lado. Ninguém nunca
              me apoiou e me amou da maneira que você faz, e isso é algo que
              valorizo mais do que consigo expressar.
            </p>
            <p className="text-slate-50 leading-relaxed mb-4">
              Tenho um imenso orgulho da pessoa incrível que você está se
              tornando e um orgulho ainda maior de poder te chamar de meu amor.
              Espero que possamos compartilhar muitos momentos juntos e que eu
              consiga retribuir tudo o que você faz por mim.
            </p>
            <blockquote className="text-slate-50 italic border-l-4 border-pink-500 pl-4 mb-4">
              "O mundo ainda é bonito porque você está nele." – Tada Banri,
              Golden Time
            </blockquote>
            <p className="text-lg font-semibold text-pink-600">
              Te amo infinitamente. 💖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
