export default function Showmore({ popupCar, setPopupType }) {
    return (
        <div className="grid grid-cols-2 items-center md:grid-cols-1">
        
            <div className="w-full h-full bg-[#D2D6DC] rounded-[30px]">
                <div
                    className="w-4/5 h-full mx-auto  bg-[#D2D6DC] bg-contain bg-center bg-no-repeat  md:aspect-[7/5]"
                    style={{
                        backgroundImage: `url(${popupCar.img})`,
                    }}
                ></div>
            </div>
            <div className="flex flex-col h-full w-full ml-10 md:ml-0">
                <h3 className="text-xl font-semibold text-[#2A609D] md:mt-1">
                    {popupCar.name}
                </h3>
                <div className="grid grid-cols-2 w-[400px] items-center lg:w-[310px] md:max-h-48 md:overflow-y-scroll">
                    <p className="text-[#1E1E1E80] mt-5 lg:text-sm">Бренд</p>
                    <p className="text-black mt-5 lg:text-sm">{popupCar.brand}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Категория</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.type}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Статус доступности</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.status}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Тип двигателя</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.engine}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Объём двигателя</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.capacity}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Мощность</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.power}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Тип КПП</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.transmission}</p>
                    <p className="text-[#1E1E1E80] mt-3 lg:text-sm">Привод</p>
                    <p className="text-black mt-3 lg:text-sm">{popupCar.drive}</p>
                </div>
                <button
                    className="py-[14px] px-[30px] border border-[#D2D6DC] bg-[#D2D6DC] rounded-full text-black w-fit mt-10 md:mt-4 md:py-[8px] md:px-[16px] hover:bg-[#2A609D] hover:text-white transition-all ease-in-out"
                    onClick={() => {
                        setPopupType("order");
                    }}
                >
                    Оставить заявку
                </button>
            </div>
        </div>
    );
}
