"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const menu = [
  { title: "صفحه اصلی", active: true },
  {
    title: "شرکت گلستان",
    children: [
      "معرفی شرکت",
      "تاریخچه گلستان",
      "اخبار و اطلاعیه ها",
      "مسولیت های اجتماعی",
      "سازمان فروش",
      "سازمان توزیع",
      "برندها",
    ],
  },
  {
    title: "محصولات",
    children: [
      "چای",
      "ناتس",
      "ادویه و چاشنی",
      "برنج",
      "زعفران و زرشک",
      "دمنوش",
      "حبوبات و غلات",
      "عصاره و شربت گیاهی",
      "قند و شکر",
      "هاتی نودل",
      "سایر محصولات",
      "گل کیس",
    ],
  },
  { title: "وبلاگ", children: ["مجله گلستان"] },
  { title: "قرعه کشی" },
  { title: "استخدام" },
  {
    title: "تماس با ما",
    wide: true,
    children: ["دفتر مرکزی", "صدای مصرف کنندگان", "ارتباط با مشترکین"],
  },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    setOpenSub(null);
  };

  return (
    <div className="relative z-50 bg-[#E9E9E9]">
      <div className="mx-auto max-w-[1600px] bg-[#272727]">
        {/* نوار بالا */}
        <div className="flex h-[70px] items-center justify-between px-4 lg:h-[106px] lg:justify-start lg:px-0">
          {/* لوگو */}
          <a href="#" className="shrink-0 lg:mr-4 xl:mr-[120px] 2xl:mr-[300px]">
            <img
              src="/logo/logo-golestan-web-1.webp"
              alt="گلستان"
              className="h-[48px] w-auto lg:h-[90px]"
            />
          </a>

          {/* دکمه همبرگری (فقط موبایل و تبلت) */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="منو"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-[22px] text-white lg:hidden"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>

          {/* منوی دسکتاپ */}
          <nav className="hidden lg:mr-6 lg:block xl:mr-16">
            <ul className="flex items-center">
              {menu.map((item) => (
                <li
                  key={item.title}
                  className="group relative flex h-[106px] items-center"
                >
                  <a
                    href="#"
                    className={`flex items-center gap-2 px-3 text-[14px] xl:px-6 ${
                      item.active
                        ? "text-white"
                        : "text-[#AFB2B4] group-hover:text-white"
                    }`}
                  >
                    {item.title}
                    {item.children && (
                      <FontAwesomeIcon icon={faCaretDown} className="w-[8px]" />
                    )}
                  </a>

                  {/* خط جداکننده */}
                  <span className="absolute left-0 top-1/2 h-7 -translate-y-1/2 border-l border-[#4D4D52]" />

                  {/* زیرمنوی دسکتاپ */}
                  {item.children && (
                    <ul
                      className={`absolute right-0 top-full z-50 hidden bg-[#272727] py-2 group-focus-within:block group-hover:block ${
                        item.wide ? "w-60" : "w-44"
                      }`}
                    >
                      {item.children.map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            className="block px-7 py-2 text-[15px] text-[#AFB2B7] hover:text-white"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li className="px-3 font-sans text-[15px] text-[#AFB2B4] hover:text-white xl:px-6">
                <a href="#">EN</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* منوی موبایل */}
        {open && (
          <div className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-[#4D4D52] bg-[#272727] lg:hidden">
            <ul>
              {menu.map((item, i) => (
                <li key={item.title} className="border-b border-[#4D4D52]">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenSub(openSub === i ? null : i)}
                        aria-expanded={openSub === i}
                        className="flex w-full items-center justify-between px-5 py-3 text-[15px] text-[#AFB2B4] hover:text-white"
                      >
                        {item.title}
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className={`w-[10px] transition-transform ${
                            openSub === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openSub === i && (
                        <ul className="bg-[#1E1E1E] px-8 py-1">
                          {item.children.map((sub) => (
                            <li key={sub}>
                              <a
                                href="#"
                                className="block py-2.5 text-[14px] text-[#AFB2B7] hover:text-white"
                              >
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href="#"
                      className={`block px-5 py-3 text-[15px] hover:text-white ${
                        item.active ? "text-white" : "text-[#AFB2B4]"
                      }`}
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}

              <li className="px-5 py-3 font-sans text-[15px] text-[#AFB2B4]">
                <a href="#">EN</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;