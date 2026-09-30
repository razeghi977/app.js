const Social = () => {
  return (
    <div className="bg-[#E9E9E9]">
      <div className="relative mx-auto h-[400px] max-w-[1600px] bg-[#105153] md:h-[550px]">
        {/* خط وسط */}
        <hr className="absolute inset-x-0 top-1/2 border-t border-[#009CA0]" />

        {/* عنوان بالای خط */}
        <div className="absolute inset-x-0 bottom-1/2 mx-auto mb-3 max-w-[550px] px-4">
          <h2 className="text-center text-[16px] text-white md:text-[19px]">
            مسئولیت‌های اجتماعی شرکت گلستان
          </h2>
        </div>

        {/* متن‌های زیر خط: موبایل زیر هم، دسکتاپ کنار هم */}
        <div
          dir="ltr"
          className="absolute inset-x-0 top-1/2 mt-3 flex flex-col items-center gap-1 px-4 md:flex-row md:items-baseline md:justify-center md:gap-5"
        >
          <h2 className="text-[22px] text-[#009DA2] md:text-[28px]">Golestan</h2>
          <h2 className="text-[16px] text-[#00D4C4] md:text-[22px]">
            Social Responsibility
          </h2>
        </div>

        {/* تصویر: موبایل و تبلت وسط پایین، دسکتاپ همان جای اصلی */}
        <span className="absolute inset-x-0 bottom-6 flex justify-center md:bottom-10 lg:bottom-auto lg:right-[590px] lg:top-[390px] lg:block">
          <img
            src="/images/image-8.jpg"
            alt=""
            className="h-auto max-w-[110px] md:max-w-[160px] lg:max-w-none"
          />
        </span>
      </div>

      {/* نوار طلایی پایین */}
      <div className="mx-auto h-4 max-w-[1600px] bg-[#E9D69F] md:h-6"></div>
    </div>
  );
};

export default Social;
