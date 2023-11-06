export default function Card({ car, handlePopupOpen }) {
    return (
        <div className="border border-[#D2D6DC] py-7 px-5 rounded-[30px] flex flex-col justify-between gap-10 1.5xl:gap-8 md:gap-4 md:p-2 1.5sm:p-4">
            <div className="w-full aspect-[7/5] bg-[#D2D6DC] rounded-[30px]">
                <div
                    className="w-4/5 h-full mx-auto  bg-[#D2D6DC] bg-contain bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${car.img})`,
                    }}
                ></div>
            </div>
            <div className="">
                <h3 className="text-xl font-semibold text-[#2A609D]">
                    {car.name}
                </h3>
                <div className="my-4">
                    <p className="text-sm text-black">
                        <b>Объём:</b> {car.capacity}
                    </p>
                    <p className="text-sm text-black">
                        <b>Мощность</b> {car.power}
                    </p>
                </div>
                <p className="text-base font-medium text-[#2A609D]">
                    от {car.price} р.
                </p>
            </div>
            <div className="flex justify-between">
                <button
                    className="py-[14px] px-[30px] border border-[#D2D6DC] rounded-full text-black 2xl:py-2 2xl:px-6 1.5xl:px-3 xl:text-sm lg:text-base lg:px-4 lg:py-4 md:text-sm md:py-2 md:px-3 1.5sm:p-4 hover:bg-[#2A609D] hover:text-white transition-all ease-in-out"
                    onClick={() => {
                        handlePopupOpen(car, "showmore");
                    }}
                >
                    Подробнее
                </button>
                <button
                    className="py-[14px] px-[30px] border border-[#D2D6DC] bg-[#D2D6DC] rounded-full text-black 2xl:py-2 2xl:px-6 1.5xl:px-3 xl:text-sm lg:text-base lg:px-4 lg:py-4 md:text-sm md:py-2 md:px-3 1.5sm:p-4 hover:bg-[#2A609D] hover:text-white transition-all ease-in-out"
                    onClick={() => {
                        handlePopupOpen(car, "order");
                    }}
                >
                    Оставить заявку
                </button>
            </div>
        </div>
    );
}
