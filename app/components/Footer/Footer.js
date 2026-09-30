const columns = [
  {
    image: "/images/image-3.png",
    title: "چای گلستان",
    links: [
      "چای ممتاز هندوستان",
      "چای ممتاز ارل گری",
      "چای سیلان عطری",
      "چای ممتاز سیلان",
      "چای صبحانه گلستان",
    ],
  },
  {
    image: "/images/image-4.png",
    title: "تی بک گلستان",
    links: [
      "تی بک بلک لاین",
      "تی بک ارل گری",
      "دمنوش نعناع",
      "دمنوش بابونه",
      "دمنوش چای سبز",
    ],
  },
  {
    image: "/images/image-5.png",
    title: "ادویه گلستان",
    links: [
      "زعفران ممتاز خراسان",
      "ادویه کاری",
      "ادویه ماست و خیار",
      "فلفل سیاه خالص",
      "زردچوبه ممتاز",
    ],
  },
  {
    image: "/images/image-6.png",
    title: "حبوبات گلستان",
    links: [
      "لوبیا قرمز ممتاز",
      "لوبیاچیتی گلستان",
      "عدس کانادایی",
      "نخود زودپز کرمانشاه",
      "لوبیا سفید گلستان",
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#E9E9E9]">
      <div className="mx-auto h-4 max-w-[1600px] bg-[#ED1C24] md:h-6"></div>

      <div className="mx-auto max-w-[1600px] bg-[#252525] px-5 py-10 lg:min-h-[500px] lg:py-[52px]">
        <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-[76px]">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col items-center">
              <img
                src={col.image}
                alt=""
                className="h-auto w-full max-w-[160px] lg:max-w-full"
              />

              <h3 className="mt-5 w-full border-y border-white py-3 text-center text-[15px] text-white md:mt-7 md:py-4 md:text-base">
                {col.title}
              </h3>

              <ul className="w-full pt-4 text-center md:pt-5 lg:text-right">
                {col.links.map((link) => (
                  <li
                    key={link}
                    className="py-0.5 text-[13px] text-[#B6B4BB] md:text-[15px]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
