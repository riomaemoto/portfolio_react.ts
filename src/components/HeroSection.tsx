import { ArrowDownIcon } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="mx-auto text-center md:text-left mb-10 md:mb-0 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">初めまして</span>
            <span className="text-blue-600 block">リオです。</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            将来はフルスタックエンジニアとして
            <br />
            活躍したいと考えています。
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto md:mx-0">
            ホームページ制作やWebアプリケーション開発を通じて、
            <br />
            ユーザーにとって使いやすく、魅力的な製品を提供することを
            <br />
            目指しています。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              プロジェクトを見る
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              問い合わせ
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 hover:-rotate-12">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className=" hidden md:block absolute bottom-8 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDownIcon size={32} className="text-blue-600" />
      </a>
    </section>
  );
};
