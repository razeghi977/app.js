const videos = [
  {
    src: "https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame",
    title: "سالاد نودل",
    text: "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
    button: "ویدیو های بیشتر",
  },
  {
    src: "https://www.aparat.com/video/video/embed/videohash/cfdo0n9/vt/frame",
    title: "اینستاگرام هاتی نودل",
    text: "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی، ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
    button: "ادامه مطالب",
  },
  {
    src: "https://www.aparat.com/video/video/embed/videohash/x4047ld/vt/frame",
    title: "برنج گلستان",
    text: "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان، كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛ لایق بهترین ها هستند.",
    button: "مشاهده محصولات",
  },
];

const Video = () => {
  return (
    <div className="bg-[#E9E9E9]">
      <div className="mx-auto max-w-[1600px] bg-white px-4 py-8 md:py-10 lg:min-h-[700px]">
        <div className="mx-auto grid max-w-[950px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {videos.map((item) => (
            <div
              key={item.src}
              className="flex flex-col bg-white pb-6 md:min-h-[520px] lg:min-h-[621px]"
            >
              {/* ویدیوی آپارات */}
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={item.src}
                  title={item.title}
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <a
                href="#"
                className="block cursor-pointer pr-5 pt-4 text-[17px] font-semibold text-[#FF0000] md:pr-6 md:text-[19px]"
              >
                {item.title}
              </a>

              <p className="cursor-pointer px-5 pt-4 text-[15px] leading-6 text-[#8887A3] md:pt-9 md:text-base">
                {item.text}
              </p>

              <div className="mt-auto pr-4 pt-6">
                <a
                  href="#"
                  className="inline-block rounded-md border border-zinc-800 px-6 py-2 text-gray-600 hover:bg-red-600 hover:text-white"
                >
                  {item.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;