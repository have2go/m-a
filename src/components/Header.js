import { useState } from "react";
import Scrollspy from "react-scrollspy";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBgActive, setIsBgActive] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        setIsBgActive(!isBgActive);
    };

    return (
        <header className="w-full bg-[#D2D6DC] fixed z-50">
            <div className="flex justify-between items-center py-5 max-w-[1500px] w-full mx-auto 2xl:max-w-7xl 1.5xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl 1.5sm:max-w-md sm:max-w-[90%]">
                <a
                    className="w-[180px] h-[30px] bg-logo bg-center bg-no-repeat bg-contain 1.5sm:h-[20px] 1.5sm:w-[140px] hover:opacity-80 transition-all ease-in-out"
                    href="/"
                ></a>
                <Scrollspy
                    className="flex gap-4 lg:hidden"
                    items={["catalog", "about", "steps"]}
                    currentClassName="is-current"
                >
                    <a
                        href="/#catalog"
                        className="font-normal text-lg px-4 py-2 text-black xl:text-sm"
                    >
                        Наш транспорт
                    </a>
                    <a
                        href="/#about"
                        className="font-normal text-lg px-4 py-2 text-black xl:text-sm"
                    >
                        О компании
                    </a>
                    <a
                        href="/#steps"
                        className="font-normal text-lg px-4 py-2 text-black xl:text-sm"
                    >
                        Этапы сотрудничества
                    </a>
                </Scrollspy>
                <div className="flex gap-7 items-center 1.5sm:gap-3">
                    <a
                        href="tel:+78126009595"
                        className="font-normal text-lg text-black xl:text-sm 1.5sm:hidden"
                    >
                        8 812 600 95 95
                    </a>
                    <a
                        href="/#contact"
                        className="font-normal text-lg text-white py-3 px-8 bg-[#2A609D] rounded-full xl:text-sm 1.5sm:px-4 1.5sm:py-2 hover:opacity-80 transition-all ease-in-out"
                    >
                        Заказать
                    </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 lg-min:hidden z-50"
                        onClick={() => handleOpen()}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                    </svg>
                </div>
                <div
                    className={`${
                        isOpen
                            ? "opacity-100 z-20 translate-x-0"
                            : "opacity-0 -z-40 translate-x-full"
                    } absolute top-0 right-0 h-screen w-screen flex justify-end transition-all duration-1000 `}
                >
                    <Scrollspy
                        className={`${
                            isOpen ? "translate-x-0" : "translate-x-full"
                        } w-full h-full bg-[#D2D6DC] z-20 flex justify-center items-center flex-col gap-6 transition-all duration-1000 `}
                        items={["catalog", "about", "steps"]}
                        currentClassName="is-current"
                    >
                        <a
                            href="/#catalog"
                            className="font-normal text-lg px-4 py-2 text-black"
                            onClick={() => handleOpen()}
                        >
                            Наш транспорт
                        </a>
                        <a
                            href="/#about"
                            className="font-normal text-lg px-4 py-2 text-black"
                            onClick={() => handleOpen()}
                        >
                            О компании
                        </a>
                        <a
                            href="/#steps"
                            className="font-normal text-lg px-4 py-2 text-black"
                            onClick={() => handleOpen()}
                        >
                            Этапы сотрудничества
                        </a>
                    </Scrollspy>
                </div>
            </div>
        </header>
    );
}
