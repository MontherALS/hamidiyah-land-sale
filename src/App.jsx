// 📁 src/App.jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  function handleClick(e) {
    if (e.target.name === "googleMaps") {
      window.open("https://maps.app.goo.gl/om52iV8n8xn6crfJ9");
    } else
      window.open(
        "https://earth.google.com/web/@31.34262489,37.31693636,510.73040736a,2368.68705524d,35y,-0h,0t,0r/data=CkUaPxI5CiQweDE1MTAwNzkxNjM3YmQ4ZmY6MHhjYzE1YjdlYTIxZjg0ZTkqEUtpbmcgQWJkdWxsYWggYmluGAIgAUICCAE6AwoBMEICCABKDQj___________8BEAA"
      );
  }

  const cardStyle =
    "p-6 shadow rounded-xl text-center bg-[#f1f5f9] text-gray-900 hover:bg-[#1c2945] hover:text-white hover:scale-105 duration-300";

  const googleButtonStyle =
    "px-6 py-2 cursor-pointer bg-[#1c2945] font-light text-white rounded-full hover:bg-[#98b1e1] hover:scale-105 duration-300";
  return (
    <div className="font-sans bg-[#f8f9fa] text-gray-800">
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-[#1c2945] text-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl sm:text-3xl font-bold">مخطط الاندلس</h1>
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
        className="bg-center bg-cover h-[90vh] flex flex-col justify-center items-center text-center text-white px-4"
        style={{ backgroundImage: "url('/11.png')" }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          الف متر مربع من الفرص <span dir="ltr">328,000</span>
        </h2>
        <p className="text-lg sm:text-2xl mb-6">
          أرض جاهزة للبيع، على بعد 15 دقيقة فقط من وسط القريات
        </p>
        <a
          href="#details"
          className="bg-white text-[#1c2945] px-6 py-2 rounded-xl font-semibold hover:scale-105 duration-300"
        >
          شاهد التفاصيل
        </a>
      </section>

      <section id="details" className="px-6 py-16 bg-[#f8f9fa] text-gray-800">
        <h3 className="text-2xl font-bold text-center mb-10">تفاصيل الأرض</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className={cardStyle}>
            <h4 className="font-semibold">المساحة</h4>
            <p>328,000 م²</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">نوع الصك</h4>
            <p>إلكتروني – زراعي مشاع</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">الموقع</h4>
            <p>15 دقيقة من القريات</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">التقسيم</h4>
            <p>مقسمة رسميًا مع كروكي وأوتاد</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">حالة </h4>
            <p>متفقون على البيع</p>
          </div>
          <div className={cardStyle}>
            <h4 className="font-semibold">السعر </h4>
            <p>عند التواصل</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center text-xl sm:text-2xl font-bold text-center my-10">
          <h1 className="mb-5 mt-13">روابط تهمك</h1>

          <div className="flex flex-col gap-4 justify-center">
            <button
              onClick={handleClick}
              name="googleMaps"
              className={googleButtonStyle}
            >
              🌍 استعرض في Google Maps
            </button>
            <button
              onClick={handleClick}
              name="googleEarth"
              className={googleButtonStyle}
            >
              🛰️ عرض جوي عبر Google Earth
            </button>
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
          href="https://wa.me/966508600270"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1c2945] text-white px-8 py-3 rounded-xl hover:bg-[#9ba5b8] duration-300"
        >
          🗨️ تواصل
        </a>
      </section>

      <footer className="py-6 text-center bg-[#1c2945] text-white text-sm">
        &copy; {new Date().getFullYear()} — عرض أرض القريات
      </footer>
    </div>
  );
}

export default App;
