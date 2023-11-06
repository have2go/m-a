import Header from "@/components/Header";
import { magra } from "@/app/fonts";

export default function Main() {
    return (
        <>
            <main className="h-screen w-full relative bg-mainBG bg-no-repeat bg-cover">
                <Header />
                <section className="max-w-[1500px] w-full h-full flex flex-col justify-between mx-auto relative 2xl:max-w-7xl 1.5xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl 1.5sm:max-w-md sm:max-w-[90%]">
                    <p
                        className={`${magra.className} pt-[164px] text-[40px] font-normal text-white lg:text-3xl lg:pt-[140px] md:text-2xl 1.5sm:text-xl`}
                    >
                        Мы специализируемся на поставке легкого и грузового{" "}
                        <br className="1.5sm:hidden" />
                        коммерческого транспорта из Европы.
                    </p>
                    <div className="flex gap-10 items-center absolute bottom-[100px] right-0 1.5xl:bottom-[80px] lg:bottom-[50px] lg:gap-7 1.5sm:gap-4">
                        <p
                            className={`${magra.className} text-[32px] font-normal text-white lg:text-3xl md:text-2xl 1.5sm:text-xl`}
                        >
                            Сотрудничаем с
                        </p>
                        <div className="bg-logoRolf bg-no-repeat bg-contain w-[244px] h-[135px] lg:h-20 lg:w-36"></div>
                    </div>
                </section>
            </main>
        </>
    );
}
