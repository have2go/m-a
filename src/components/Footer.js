export default function Footer() {
    return (
        <footer className="w-full bg-[#D2D6DC]">
            <div className="flex justify-between items-center py-5 max-w-[1500px] w-full mx-auto 2xl:max-w-7xl 1.5xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl 1.5sm:max-w-md sm:max-w-[90%]">
                <a
                    className="w-[180px] h-[30px] bg-logo bg-center bg-no-repeat bg-contain 1.5sm:h-[20px] 1.5sm:w-[100px] hover:opacity-80 transition-all ease-in-out"
                    href="/"
                ></a>

                <div className="flex gap-7 items-center justify-center sm:gap-3">
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-normal text-sm text-black sm:text-xs">
                            info@monvers-auto.ru
                        </p>
                        <a
                            href="tel:+78126009595"
                            className="font-normal text-sm text-black sm:text-xs"
                        >
                            8 812 600 95 95
                        </a>
                    </div>

                    <a target="_blank" href="https://vk.com/monvers_auto" className="bg-vk-icon bg-contain bg-no-repeat w-[40px] h-[22px]"></a>
                </div>
            </div>
        </footer>
    );
}
