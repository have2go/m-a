import { signika } from "@/app/fonts";

export default function About() {
    return (
        <section className="bg-[#EDF0F2] w-full pt-14  scroll-mt-[84px] md:pt-10 " id="about">
            <div className="max-w-[1500px] w-full mx-auto 2xl:max-w-7xl 1.5xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl 1.5sm:max-w-md sm:max-w-[90%]">
                <h2 className={`${signika.className} text-[42px] font-normal text-black mx-auto w-fit pb-16 md:pb-10 md:text-4xl sm:text-3xl sm:pb-6`}>
                    О компании
                </h2>
                <p className="text-xl font-normal text-black md:text-lg 1.5sm:text-base sm:text-sm">
                    Наши специалисты разработали уникальную схему закупки
                    и поставки коммерческого транспорта под ваш запрос.{" "}
                </p>
                <p className="text-xl font-normal my-5 text-black md:text-lg 1.5sm:text-base sm:text-sm">
                    На сайте Монверс-Авто вы найдете всю информацию о наличии
                    грузовых и пассажирских машин от ведущих производителей. Все
                    позиции представлены с конечной ценой. Вам остается только
                    выбрать транспорт со склада или заказать его из-за границы.
                    Доставка осуществляется быстро и без переплат.
                </p>
                <p className="text-xl font-normal text-black md:text-lg 1.5sm:text-base sm:text-sm">
                    По вопросам логистики и таможенному оформлению вам поможет
                    наш официальный партнер — группа компаний Highbrow Customs,
                    существующая с 1990 года.
                </p>
            </div>
        </section>
    );
}
