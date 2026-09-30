const posts = [
  {
    image: "/images/image-5.jpg",
    title: "ماکارونی با سبزیجات",
    text: "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
  },
  {
    image: "/images/image-6.jpg",
    title: "سوپ مکزیکی",
    text: "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
  },
  {
    image: "/images/image-7.jpg",
    title: "چیلاکیله",
    text: "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
  },
];

const Majaleh = () => {
  return (
    <div className="bg-[#E9E9E9]">
      {/* عنوان */}
      <div className="mx-auto flex h-[80px] max-w-[1600px] items-center bg-white px-5 md:h-[120px] md:pr-[200px] lg:pr-[400px]">
        <span className="text-[17px] font-bold text-[#FF0000] md:text-[19px]">
          مجله گلستان
        </span>
      </div>

      {/* کارت‌ها */}
      <div className="mx-auto max-w-[1600px] bg-[#CDE4B0] px-4 py-8 md:py-10 lg:min-h-[756px]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col bg-white pb-6 md:min-h-[560px] lg:min-h-[621px]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-[220px] w-full cursor-pointer object-cover hover:opacity-80 sm:h-[280px] md:h-[250px] lg:h-[300px]"
              />

              <a
                href="#"
                className="block cursor-pointer pr-5 pt-4 text-[17px] font-semibold text-[#FF0000] md:pr-6 md:text-[19px]"
              >
                {post.title}
              </a>

              <p className="cursor-pointer px-5 pt-4 text-[15px] leading-6 text-[#8887A3] md:pt-9 md:text-base">
                {post.text}
              </p>

              <div className="mt-auto pr-4 pt-6">
                <a
                  href="#"
                  className="inline-block rounded-md border border-zinc-800 px-6 py-2 text-gray-600 hover:bg-red-600 hover:text-white"
                >
                  ادامه مطلب
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Majaleh;