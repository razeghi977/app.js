const Picture1 = () => {
  return (
    <div className="relative bg-[#E9E9E9] lg:min-h-[750px]">
      {/* تصویر + کادر قرمز */}
      <div className="relative mx-auto max-w-[1600px]">
        <img
          src="/images/image-2.jpg"
          alt=""
          className="h-auto w-full object-cover"
        />
        <div className="h-3 bg-[#E9D69F] md:h-6"></div>

        {/* کادر قرمز: چسبیده به پایین تصویر، نیمی روی تصویر و نیمی روی بخش سفید */}
        <div className="absolute bottom-3 right-4 z-50 h-[72px] w-[220px] translate-y-1/2 bg-red-600 md:bottom-6 md:right-[8%] md:h-[100px] md:w-[330px] lg:right-[300px] xl:right-[570px]">
          <div className="mr-5 mt-1 text-[22px] text-white md:mr-[40px] md:mt-2 md:text-[33px]">
            برنج گلستان
          </div>
          <div className="mr-5 mt-1 text-[13px] text-white md:mr-[40px] md:mt-4 md:text-base">
            معرفی محصول
          </div>
        </div>
      </div>

      {/* بخش متن */}
      <div className="mx-auto max-w-[1600px] bg-white">
        <hr className="mx-auto mt-3 w-full max-w-[1575px] border-gray-400" />

        <div className="mx-auto max-w-[790px] px-5 pb-16 pt-6 md:px-6 md:pb-[130px] md:pt-0">
          <div className="pt-10 text-[17px] font-bold leading-10 text-[#FF0000] md:mr-5 md:text-[19px]">
            رکن اول غذای ایرانی
          </div>

          <p className="max-w-[729px] text-[15px] leading-8 text-[#998D88] md:pr-4 md:text-base md:leading-10">
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی، طارم و
            هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با
            هیچ برنج دیگری قابل مقایسه نیست. با گلستان، كیفیت زندگی بالاتر از
            همیشه است چرا كه مشتریان گلستان؛ لایق بهترین‌ها هستند.
          </p>

          {/* دکمه‌ها: در موبایل زیر هم یا شکسته، در دسکتاپ کنار هم */}
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:pr-4">
            <button className="h-9 w-[160px] cursor-pointer rounded-sm border border-zinc-800 text-gray-800 hover:bg-red-600 hover:text-white">
              محصولات برنج
            </button>
            <button className="h-9 w-[160px] cursor-pointer rounded-sm border border-zinc-800 text-gray-800 hover:bg-red-600 hover:text-white">
              آشپزخانه گلستان
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture1;
