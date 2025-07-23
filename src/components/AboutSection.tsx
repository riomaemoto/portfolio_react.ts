import { UserIcon, BookOpenIcon } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">目標</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mb-8 md:mb-0 pr-0 md:pr-8 md:ml-16">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <UserIcon size={24} className="mr-2 text-blue-600" />
              今後の目標
            </h3>
            <p className="text-gray-600 mb-6 px-6">
              多岐にわたる業界での実務経験を生かし、
              <br />
              どんな状況にも迅速に適応できます。お客様の期待を超える <br />{" "}
              サービスを提供することで、信頼と業績の向上を実現してきました。
              <br />
              今後はマネジメント側ではなく、
              <br /> 自ら現場で手を動かすエンジニアとしてのボジションで <br />{" "}
              プログラミング技術を磨き上げ、技術者として会社に貢献できる <br />{" "}
              ような人材になろうと決意致しました。
              <br />
              エンジニアとしての技術を磨いて、会社に貢献できる様 <br />{" "}
              全力を尽くしていきますのでどうぞ宜しくお願いします。
            </p>
          </div>
          <div className="mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <BookOpenIcon size={24} className="mr-2 text-blue-600" />
                勉強方法
              </h3>
              <div className="mb-2">
                <h4 className="text-lg font-medium">
                  ・YouTube <br /> ・Udemy <br /> ・Codecademy <br /> ・Progate{" "}
                  <br /> ・Coursera
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
