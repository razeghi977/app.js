const Paragraph2 = () => {
  return (
    <div className="bg-[#E9E9E9] lg:min-h-[850px]">
      <div className="mx-auto w-full max-w-[1600px] bg-white">
        <div className="relative z-50 pt-8 lg:pt-0">
          {/* خط بالایی: فقط در صفحه‌های خیلی بزرگ (مثل کد اصلی) */}
          <hr className="mx-auto hidden w-[1570px] border-0 border-t border-gray-400 2xl:-mt-[60px] 2xl:block" />

          {/* حاشیه: موبایل کم، دسکتاپ بزرگ */}
          <div className="px-5 md:px-[60px] lg:px-0 lg:mr-[200px] xl:mr-[350px] 2xl:mr-[500px]">
            <hr className="mt-6 w-full max-w-[670px] border-gray-300" />
            <h2 className="mt-5 text-[20px] text-[#FF0000] md:text-[23px]">
              معرفی گلستان
            </h2>

            <p className="max-w-[690px] text-[15px] leading-7 text-gray-400 md:text-[17px] md:leading-8">
              آنچه که امروز با نام مجموعه{" "}
              <span className="text-red-500">گلستان</span> می‌شناسیم در سال 1329
              بنیان نهاده شد. زمانی که شرکت{" "}
              <span className="text-red-500">گلستان</span> فعالیت خود را با
              بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد
              کشور، نهال <span className="text-red-500">«گلستان»</span> به تدریج
              تقویت شد و شاخ و برگ گرفت. فعالیت‌های{" "}
              <span className="text-red-500">«گلستان»</span> با تهیه، تولید و
              بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.{" "}
              <span className="text-red-500">گلستان</span> پس از سال‌ها تلاش
              همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها
              کالاهایی قابل اعتماد و با کیفیت تولید نماید.
            </p>

            <p className="mt-8 max-w-[690px] text-[15px] leading-7 text-gray-400 md:mt-[60px] md:text-[17px] md:leading-8">
              هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
              تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های
              نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت{" "}
              <span className="text-red-500">گلستان</span> است.
            </p>

            <hr className="mt-6 w-full max-w-[670px] border-gray-300" />
            <h2 className="mt-8 text-[20px] text-[#FF0000] md:mt-10 md:text-[23px]">
              محصولات گلستان
            </h2>

            <p className="max-w-[690px] text-[15px] leading-7 text-gray-400 md:text-[17px] md:leading-8">
              <span className="text-red-500">نام تجاری گلستان </span>
              قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود
              را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان
              همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و
              با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.
            </p>

            <hr className="mt-6 w-full max-w-[670px] border-gray-300" />

            {/* لینک‌ها: در موبایل چند ردیف، در دسکتاپ یک ردیف */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 md:mt-[125px] md:gap-x-[60px] xl:gap-x-[108px]">
              <div className="text-gray-700">
                <span className="border-b border-gray-500 pb-2">سرمایه انسانی</span>
              </div>
              <div className="text-gray-700">
                <span className="border-b border-gray-500 pb-2">مراکز فروش</span>
              </div>
              <div className="text-gray-700">
                <span className="border-b border-gray-500 pb-2">محصولات گلستان</span>
              </div>
              <div className="text-gray-700">
                <span className="border-b border-gray-500 pb-2">مشتریان گلستان</span>
              </div>
            </div>

            {/* فضای خالی پایین */}
            <div className="h-16 md:h-[190px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraph2;