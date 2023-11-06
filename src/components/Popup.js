import Order from "./Order";
import Showmore from "./Showmore";

export default function Popup({
    isPopupOpen,
    setIsPopupOpen,
    popupCar,
    type,
    setPopupType,
}) {
    return (
        <div
            className={`${
                isPopupOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
            } fixed top-0 w-full h-full flex justify-center items-center transition-all duration-300 ease-out`}
        >
            <div
                className={`${
                    isPopupOpen ? "opacity-100" : "opacity-0"
                } w-full h-full bg-black bg-opacity-50 flex absolute`}
                onClick={() => {
                    setIsPopupOpen(false);
                }}
            ></div>
            <div
                className={`${
                    isPopupOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
                }w-fit max-w-6xl h-fit z-20 bg-white rounded-[30px] p-7 md:p-4 1.5sm:max-w-3/4`}
            >
                {type === "showmore" && (
                    <Showmore popupCar={popupCar} setPopupType={setPopupType} />
                )}
                {type === "order" && <Order popupCar={popupCar} setIsPopupOpen={setIsPopupOpen} />}
            </div>
        </div>
    );
}
