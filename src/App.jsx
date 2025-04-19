// 📁 src/App.jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const cardStyle =
    "p-6  shadow rounded-xl text-center bg-[#f1f5f9] text-gray-900 hover:bg-[#1c2945] hover:text-white hover:scale-105 duration-300";

  const googleButtonStyle =
    "px-6 py-2 cursor-pointer bg-[#1c2945] font-light text-white rounded-full hover:bg-[#98b1e1]  transition-transform transition-colors duration-300 ease-in-out hover:scale-105 hover:brightness-110";
  return (
    <div className="font-sans bg-[#f8f9fa] text-gray-800">
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-[#1c2945] text-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl sm:text-3xl font-bold">مخطط إشبيلية</h1>
        <div className="flex space-x-4 gap-4 mt-2 sm:mt-0">
          <a href="#details" className="hover:underline text-sm sm:text-lg">
            التفاصيل
          </a>
          <a href="#contact" className="hover:underline text-sm sm:text-lg">
            تواصل معنا
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-center bg-cover h-[90vh] relative flex flex-col justify-center items-center text-center text-white px-4"
        style={{ backgroundImage: "url('/22.jpg')" }}
      >
        <h1 className="text-7xl font-Amiri mb-5">مخطط إشبيلية</h1>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          الف متر مربع من الفرص <span dir="ltr">314,000</span>
        </h2>
        <p className="text-lg sm:text-2xl mb-6">
          أرض جاهزة للبيع، على بعد 10 دقيقة فقط من وسط القريات
        </p>
        <a
          href="#details"
          className="bg-white text-[#1c2945] px-6 py-2 rounded-xl font-semibold hover:scale-105 duration-300"
        >
          شاهد التفاصيل
        </a>

        <p className="absolute bottom-4 left-4 text-sm sm:text-base text-white bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
          الصورة توضيحية وليست من الأرض المعروضة. للتفاصيل تواصل معنا
        </p>
      </section>

      <section id="details" className="px-6 py-16 bg-[#f8f9fa] text-gray-800">
        <h3 className="text-2xl font-bold text-center mb-10">تفاصيل الأرض</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className={cardStyle}>
            <h4 className="font-semibold ">المساحة</h4>
            <p className="">314,000 م²</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">نوع الصك</h4>
            <p>إلكتروني – زراعي</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">الموقع</h4>
            <p> دقائق من القريات 10</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">التقسيم</h4>
            <p>مقسمة وعليها بتر ومحددة الشوارع</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">خيارات الشراء</h4>
            <p> مكانية شراء الأرض كاملة أو جزء منه</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">السعر </h4>
            <p>عند التواصل</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center text-xl sm:text-2xl font-bold text-center my-10">
          <h1 className="mb-5 mt-13">روابط تهمك</h1>

          <div className="flex flex-col gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/NBXdvEzPyGfNrmao7"
              target="_blank"
              rel="noopener noreferrer"
              className={googleButtonStyle}
            >
              🌍 استعرض في Google Maps
            </a>
            <a
              href="https://earth.google.com/web/search/31%c2%b017%2706.2%22N+37%c2%b021%2730.7%22E/@31.28512953,37.35859243,511.38936354a,1000d,30y,0h,0t,0r/data=CiwiJgokCWcd1LL-s0FAEWagrRVps0FAGQoYq6KcmFfAIXKMuxFemVfAQgIIATIpCicKJQohMUlRVzF2Z0I2MzlhLUFsX0c3bzlMQVhhbDRCUVJrYnVVIAE6AwoBMEICCABKBwj_1MopEAE"
              target="_blank"
              rel="noopener noreferrer"
              className={googleButtonStyle}
            >
              🛰️ عرض جوي عبر Google Earth
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-6 py-20 bg-[#f1f5f9] text-gray-800 text-center"
      >
        <h3 className="text-2xl font-bold mb-6"> تواصل معنا</h3>
        <p className="mb-4">للاستفسار أو معاينة الموقع، راسلنا عبر الواتساب</p>
        <a
          href="https://wa.me/966541126983"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1c2945] text-white px-8 py-3 rounded-xl hover:bg-[#98b1e1]  duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        >
          🗨️ تواصل
        </a>

        <p className="mt-3">أو عبر الاتصال على:</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-1 text-lg font-semibold">
          <a
            href="tel:0541126983"
            className="hover:underline hover:text-[#1c2945]"
          >
            📞 0541126983
          </a>
          <span className="hidden sm:inline">||</span>
          <a
            href="tel:0540682686"
            className="hover:underline hover:text-[#1c2945]"
          >
            📞 0540682686
          </a>
        </div>
      </section>

      <footer className="py-6 text-center bg-[#1c2945] text-white text-sm">
        &copy; {new Date().getFullYear()} — عرض مخطط إشبيلية
      </footer>
    </div>
  );
}

export default App;
