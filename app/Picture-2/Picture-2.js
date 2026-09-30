const Picture2 = () => {
  return (
    <div className="relative bg-[#E9E9E9] lg:min-h-[750px]">
      {/* تصویر + کادر قرمز */}
      <div className="relative mx-auto max-w-[1600px]">
        <img
          src="/images/image-3.jpg"
          alt=""
          className="h-auto w-full object-cover"
        />
        <div className="h-3 bg-[#E9D69F] md:h-6"></div>

        {/* کادر قرمز: نیمی روی تصویر و نیمی روی بخش سفید */}
        <div className="absolute bottom-3 right-4 z-50 h-[72px] w-[220px] translate-y-1/2 bg-red-600 md:bottom-6 md:right-[8%] md:h-[100px] md:w-[330px] lg:right-[300px] xl:right-[570px]">
          <div className="mr-5 mt-1 text-[22px] text-white md:mr-[40px] md:mt-2 md:text-[33px]">
            چای گلستان
          </div>
          <div className="mr-5 mt-1 text-[13px] text-white md:mr-[40px] md:mt-4 md:text-base">
            معرفی محصول
          </div>
        </div>
      </div>

      {/* بخش متن */}
      <div className="mx-auto max-w-[1600px] bg-white">
        <div className="mx-auto max-w-[790px] px-5 pb-16 pt-14 md:px-6 md:pb-[130px] md:pt-0">
          <div className="text-[17px] font-bold leading-10 text-[#FF0000] md:mr-5 md:text-[19px] md:leading-[80px]">
            سابقه‌ای به قدمت یک عمر
          </div>

          <p className="max-w-[729px] text-[15px] leading-8 text-[#998D88] md:pr-4 md:text-base md:leading-10">
            چای تنها یك نوشیدنی گرم نیست. یک گفتمان است؛ گرمابخش وجود و بهانه‌ای
            برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی
            دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده، حس خوب
            آرامش را به همراه دارد.
          </p>

          <p className="mt-6 max-w-[729px] text-[15px] leading-8 text-[#998D88] md:pr-4 md:pt-4 md:text-base md:leading-10">
            با چای پیوند خورده است؛ قدیمی‌ترین محصول مجموعه{" "}
            <span className="font-bold text-[#FF0000]">گلستان</span>، با
            مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی
            می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند،
            كیفیت، عطر و طعم به یادماندنی آن است.
          </p>

          <div className="mt-8 md:mt-10 md:pr-4">
            <button className="h-9 w-[160px] cursor-pointer rounded-sm border border-zinc-800 text-gray-800 hover:bg-red-600 hover:text-white">
              محصولات چای
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture2;