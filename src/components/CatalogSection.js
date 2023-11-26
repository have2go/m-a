"use client";

import { useEffect, useState } from "react";
import { signika } from "@/app/fonts";
import InputMask from "react-input-mask";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { scrollTo } from "@/utils/scrollTo";
import initialCars from "../cars.json";
import Popup from "./Popup";

export default function CatalogSection() {
    const [renderedCars, setRenderedCars] = useState(initialCars);
    const [isArrEmpty, setIsArrEmpty] = useState(false);
    const [isPriceChanged, setIsPriceChanged] = useState(false);
    const [isFilterChanged, setIsFilterChanged] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupCar, setPopupCar] = useState(false);
    const [popupType, setPopupType] = useState("");
    // const [isShowMore, setIsShowMore] = useState(true);
    // const [carsToShow, setCarsToShow] = useState([]);

    const [brandFilter, setBrandFilter] = useState("Бренд");
    const [typeFilter, setTypeFilter] = useState("Категория");
    const [statusFilter, setStatusFilter] = useState("Статус");

    const stringToNum = (string) => {
        return Number(string.split(" ").join(""));
    };

    const highestPrice = Math.max.apply(
        null,
        initialCars.map((car) => stringToNum(car.price))
    );
    const lowestPrice = Math.min.apply(
        null,
        initialCars.map((car) => stringToNum(car.price))
    );

    const [maxPrice, setMaxPrice] = useState(highestPrice);
    const [minPrice, setMinPrice] = useState(lowestPrice);

    const filterButton = (type, filter) => {
        let filteredCars = initialCars;

        if (type === "type") {
            filteredCars = initialCars.filter((car) => {
                return car.type === filter;
            });
            setTypeFilter(filter);
            setBrandFilter("Бренд");
            setStatusFilter("Статус");
        }

        if (type === "brand") {
            filteredCars = initialCars.filter((car) => {
                return car.brand === filter;
            });
            setBrandFilter(filter);
            setTypeFilter("Категория");
            setStatusFilter("Статус");
        }

        setMaxPrice(highestPrice);
        setMinPrice(lowestPrice);
        setRenderedCars(filteredCars);
        scrollTo({ id: "cars", duration: 50 });
    };

    const handleFilterReset = () => {
        setBrandFilter("Бренд");
        setTypeFilter("Категория");
        setStatusFilter("Статус");
        setMaxPrice(highestPrice);
        setMinPrice(lowestPrice);
        setRenderedCars(initialCars);
        // setIsShowMore(true);
    };

    const handlePriceChange = (value, type) => {
        if (type === "min") {
            stringToNum(value) >= lowestPrice &&
            stringToNum(value) < highestPrice
                ? setMinPrice(stringToNum(value))
                : setMinPrice(lowestPrice);
        }
        if (type === "max") {
            stringToNum(value) <= highestPrice &&
            stringToNum(value) > lowestPrice
                ? setMaxPrice(stringToNum(value))
                : setMaxPrice(highestPrice);
        }
        setIsPriceChanged(true);
    };

    const handlePopupOpen = (car, type) => {
        setPopupType(type);
        setIsPopupOpen(true);
        setPopupCar(car);
    };

    useEffect(() => {
        let filteredCars = initialCars;

        if (brandFilter !== "Бренд")
            filteredCars = filteredCars.filter(
                (car) => car.brand === brandFilter
            );
        if (typeFilter !== "Категория")
            filteredCars = filteredCars.filter(
                (car) => car.type === typeFilter
            );
        if (statusFilter !== "Статус")
            filteredCars = filteredCars.filter(
                (car) => car.status === statusFilter
            );

        filteredCars = filteredCars.filter(
            (car) =>
                stringToNum(car.price) >= minPrice &&
                stringToNum(car.price) <= maxPrice
        );

        filteredCars.length === 0 ? setIsArrEmpty(true) : setIsArrEmpty(false);

        setRenderedCars(filteredCars);
        setIsPriceChanged(false);
    }, [brandFilter, typeFilter, statusFilter, isPriceChanged]);

    useEffect(() => {
        if (
            brandFilter !== "Бренд" ||
            typeFilter !== "Категория" ||
            statusFilter !== "Статус" ||
            minPrice !== lowestPrice ||
            maxPrice !== highestPrice
        ) {
            setIsFilterChanged(true);
        } else {
            setIsFilterChanged(false);
        }
    }, [
        brandFilter,
        highestPrice,
        lowestPrice,
        maxPrice,
        minPrice,
        statusFilter,
        typeFilter,
    ]);

    // useEffect(() => {
    //     if (renderedCars.length > 6 && isShowMore) {
    //         setCarsToShow(renderedCars.slice(0, 6));
    //     } else {
    //         setCarsToShow(renderedCars);
    //         setIsShowMore(false);
    //     }
    // }, [renderedCars, isShowMore])

    return (
        <section
            className="bg-[#EDF0F2] w-full py-24 lg:py-16 md:py-12"
            id="catalog"
        >
            <div className="max-w-[1500px] w-full mx-auto 2xl:max-w-7xl 1.5xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl">
                <h2
                    className={`${signika.className} text-[42px] font-normal text-black mx-auto w-fit pb-16 lg:text-4xl md:text-3xl md:pb-12`}
                >
                    Наш транспорт
                </h2>
                <div className="w-11/12 rounded-[30px] py-[30px] px-10 bg-white mx-auto shadow-max flex flex-col  md:w-full  1.5sm:px-4">
                    <div className="flex justify-evenly mb-[55px] 1.5sm:mb-8">
                        <button
                            className="flex flex-col gap-3 items-center"
                            onClick={() => {
                                filterButton("type", "Пассажирский");
                            }}
                        >
                            <div className="h-8 w-24 bg-car-sm bg-contain bg-center bg-no-repeat 1.5sm:w-16"></div>
                            <p className="text-sm font-semibold text-black sm:text-[8px]">
                                ПАССАЖИРСКИЙ
                            </p>
                        </button>
                        <button
                            className="flex flex-col gap-3 items-center"
                            onClick={() => {
                                filterButton("type", "Грузопассаж");
                            }}
                        >
                            <div className="h-8 w-24 bg-car-md bg-contain bg-center bg-no-repeat 1.5sm:w-16"></div>
                            <p className="text-sm font-semibold text-black sm:text-[8px]">
                                ГРУЗОПАССАЖ
                            </p>
                        </button>
                        <button
                            className="flex flex-col gap-3 items-center"
                            onClick={() => {
                                filterButton("type", "Грузовой");
                            }}
                        >
                            <div className="h-8 w-24 bg-car-bg bg-contain bg-center bg-no-repeat 1.5sm:w-16"></div>
                            <p className="text-sm font-semibold text-black sm:text-[8px]">
                                ГРУЗОВОЙ
                            </p>
                        </button>
                    </div>
                    <div className="flex justify-between 1.5xl:justify-center 1.5xl:flex-col 1.5xl:gap-4 gap-20 2xl:gap-12 mx-auto">
                        <div className="flex gap-20 2xl:gap-12 1.5xl:gap-20 1.5sm:gap-10 sm:gap-4 mx-auto">
                            <button
                                className="h-20 w-20 md:h-16 md:w-16 sm:h-14 sm:w-14 bg-renault-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Renault");
                                }}
                            ></button>
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-dacia-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Dacia");
                                }}
                            ></button>
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-ford-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Ford");
                                }}
                            ></button>
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-citroen-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Citroen");
                                }}
                            ></button>
                        </div>
                        <div className="flex gap-20 1.5sm:gap-10 sm:gap-4 mx-auto ">
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-opel-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Opel");
                                }}
                            ></button>
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-mercedes-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Mercedes");
                                }}
                            ></button>
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-fiat-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Fiat");
                                }}
                            ></button>
                            <button
                                className="h-20 md:h-16 w-20 md:w-16 sm:h-14 sm:w-14 bg-peugeot-logo bg-contain bg-center bg-no-repeat"
                                onClick={() => {
                                    filterButton("brand", "Peugeot");
                                }}
                            ></button>
                        </div>
                    </div>
                    <div className="" id="cars"></div>
                </div>
                <div className="mt-12  p-5 flex justify-center items-start mx-auto scroll-mt-[84px]">
                    <div className="flex lg:flex-col lg:gap-4">
                        <div className="px-10  border-[#D2D6DC] border-r border-l 2xl:px-8 xl:px-2 lg:px-0 md:border-l-0">
                            <Dropdown
                                title={brandFilter}
                                options={[
                                    "Renault",
                                    "Dacia",
                                    "Ford",
                                    "Citroen",
                                    "Mercedes",
                                    "Opel",
                                    "Fiat",
                                    "Peugeot",
                                ]}
                                setFunc={setBrandFilter}
                                initialState={"Бренд"}
                            />
                        </div>
                        <div className="px-10 2xl:px-8 xl:px-2 lg:px-0 md:border-r">
                            <Dropdown
                                title={typeFilter}
                                options={[
                                    "Пассажирский",
                                    "Грузопассаж",
                                    "Грузовой",
                                ]}
                                setFunc={setTypeFilter}
                                initialState={"Категория"}
                            />
                        </div>
                    </div>
                    <div className="flex lg:flex-col lg:gap-4">
                        <div className="px-10  border-[#D2D6DC] border-r border-l 2xl:px-8 xl:px-2 lg:px-0 md:border-0">
                            <Dropdown
                                title={statusFilter}
                                options={["В пути", "На складе"]}
                                setFunc={setStatusFilter}
                                initialState={"Статус"}
                            />
                        </div>
                        <div className="px-10  flex items-center gap-7 xl:px-4 lg:gap-4 md:flex-col md:border-l md:border-[#D2D6DC]">
                            <p className="text-[#1E1E1E80]">
                                От{" "}
                                <InputMask
                                    mask="9 999 999"
                                    maskChar=" "
                                    className="w-[120px] px-4 py-2 rounded-lg lg:w-[110px]"
                                    value={minPrice}
                                    onChange={(e) =>
                                        setMinPrice(e.target.value)
                                    }
                                    onBlur={(e) =>
                                        handlePriceChange(e.target.value, "min")
                                    }
                                />
                            </p>
                            <p className="text-[#1E1E1E80]">
                                До{" "}
                                <InputMask
                                    mask="9 999 999"
                                    maskChar=" "
                                    className="w-[120px] px-4 py-2 rounded-lg lg:w-[110px]"
                                    value={maxPrice}
                                    onChange={(e) =>
                                        setMaxPrice(e.target.value)
                                    }
                                    onBlur={(e) =>
                                        handlePriceChange(e.target.value, "max")
                                    }
                                />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-fit pb-5 md:pb-4 ">
                    <button
                        className={`text-[#1E1E1E80] bg-white px-4 py-2 rounded-lg ${
                            !isFilterChanged ? "invisible" : "visible"
                        }`}
                        onClick={() => {
                            handleFilterReset();
                        }}
                    >
                        Сбросить фильтры
                    </button>
                </div>

                {!isArrEmpty && (
                    <div className="grid grid-cols-3 gap-14 xl:gap-8 lg:grid-cols-2 md:gap-4 1.5sm:grid-cols-1 1.5sm:w-3/4 1.5sm:mx-auto sm:w-11/12">
                        {renderedCars.map((car, i) => {
                            return (
                                <Card
                                    car={car}
                                    key={i}
                                    handlePopupOpen={handlePopupOpen}
                                />
                            );
                        })}
                    </div>
                )}
                {/* {isShowMore && (<div className="mx-auto w-fit pt-10">
                    <button
                        className={`text-[#1E1E1E80] text-lg bg-white px-10 py-6 rounded-full`}
                        onClick={() => {
                            setIsShowMore(false);
                        }}
                    >
                        Показать ещё
                    </button>
                </div>)} */}
                {isArrEmpty && (
                    <p className="text-[#1E1E1E80] mx-auto w-fit text-xl">
                        Ничего не найдено
                    </p>
                )}
            </div>

            <Popup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
                popupCar={popupCar}
                type={popupType}
                setPopupType={setPopupType}
            />
        </section>
    );
}
