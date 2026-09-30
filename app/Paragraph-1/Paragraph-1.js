const Paragraph1 = () => {
  return (
    <div className="bg-[#E9E9E9] z-10 lg:min-h-[750px]">
      <div
        className="
          relative
          bg-[#E4E4E4]
          w-full
          lg:w-[1600px]
          min-h-[700px]
          lg:h-[300px]
          mx-auto
          z-10
        "
      >
        {/* عنوان */}
        <div
          className="
            text-[#FF0000]
            text-[24px]
            sm:text-[27px]
            lg:text-[30px]
            pr-5
            sm:pr-10
            lg:pr-[340px]
            pt-[70px]
            sm:pt-[90px]
            lg:pt-[120px]
            z-10
          "
        >
          قرعه‌کشی ویژه مصرف‌کنندگان
        </div>

        {/* عنوان دوم */}
        <div
          className="
            text-[#5C6E7C]
            pr-5
            sm:pr-10
            lg:pr-[340px]
            pt-[20px]
            text-[17px]
            lg:text-[19px]
          "
        >
          قرعه‌کشی چای و ناتس گلستان
        </div>

        {/* متن اول */}
        <div
          className="
            text-[#8C8C8C]
            pr-5
            sm:pr-10
            lg:pr-[340px]
            pt-[25px]
            text-[15px]
            lg:text-[17px]
            flex
            flex-wrap
          "
        >
          با خرید محصولات چای و ناتس گلستان، کد روی بسته را به شماره
        </div>

        {/* متن دوم */}
        <div
          className="
            text-[#8C8C8C]
            pr-5
            sm:pr-10
            lg:pr-[340px]
            pt-[16px]
            text-[15px]
            lg:text-[17px]
            flex
            flex-wrap
          "
        >
          30007405 ارسال کنید و در قرعه‌کشی‌های دوره‌ای ما شرکت کنید.
        </div>

        {/* دکمه */}
        <button
          className="
            text-[#88898A]
            bg-white
            text-[16px]
            w-30
            h-9
            mt-9
            rounded-sm
            mr-5
            sm:mr-10
            lg:mr-[340px]
            cursor-pointer
            hover:bg-rose-500
            hover:text-white
          "
        >
          اطلاعات بیشتر
        </button>

        {/* تصویر - مخصوص دسکتاپ سمت چپ */}
        {/* تصویر - مخصوص دسکتاپ سمت چپ */}
        <div
          className="
    mt-10 
    flex 
    justify-center 
    lg:absolute 
    lg:top-[100px] 
    lg:left-[380px]
  "
        >
          <img
            src="/images/image-1.png"
            alt="گلستان"
            className="w-[300px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Paragraph1;
