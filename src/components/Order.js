import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";

export default function Order({ popupCar, setIsPopupOpen }) {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [buttonText, setButtonText] = useState("Отправить");
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setButtonText("Отправка...");

        emailjs
            .sendForm(
                "service_qhwdg5a",
                "template_03h5brm",
                form.current,
                "6-zsQ_X4oZAbU8ZEa"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setButtonText("Заявка успешно отправлена!");
                    setIsSuccess(true);
                    setTimeout(() => {
                        setIsPopupOpen(false);
                        setButtonText("Отправить");
                        setIsSuccess(false);
                    }, 3000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="flex flex-col gap-5 sm:max-w-[320px]">
            <div className="flex items-center gap-5 1.5sm:gap-1">
                <div className="w-full max-w-[150px] h-full aspect-[7/5] bg-[#D2D6DC] rounded-[30px] px-2">
                    <div
                        className="w-[130px] h-full rounded-[30px] bg-[#D2D6DC] bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${popupCar.img})`,
                        }}
                    ></div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#2A609D] whitespace-nowrap mb-2 1.5sm:text-base 1.5sm:whitespace-normal">
                        {popupCar.name}
                    </h3>
                    <p className="text-[#1E1E1E80] whitespace-nowrap 1.5sm:text-xs">
                        Категория: {popupCar.type}
                    </p>
                    <p className="text-[#1E1E1E80] whitespace-nowrap 1.5sm:text-xs sm:whitespace-break-spaces">
                        Статус доступности: {popupCar.status}
                    </p>
                </div>
            </div>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-xl w-full flex flex-col gap-5"
            >
                <input
                    type="text"
                    name="car"
                    value={popupCar.name}
                    readOnly
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder="ФИО"
                    value={name}
                    name="user_name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="p-3 outline-[#2A609D] bg-white rounded-full text-black text-base border border-[#1E1E1E80]"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="p-3 outline-[#2A609D] bg-white rounded-full text-black text-base border border-[#1E1E1E80]"
                />
                <InputMask
                    mask="+7\ (999) 999-99-99"
                    type="text"
                    name="user_phone"
                    placeholder="Телефон"
                    minLength={10}
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    className="p-3 outline-[#2A609D] bg-white rounded-full text-black text-base border border-[#1E1E1E80]"
                />
                <button
                    type="submit"
                    className={`${
                        isSuccess ? "bg-green-700" : "bg-[#2A609D]"
                    } p-5 rounded-full text-white text-sm hover:opacity-80 transition-all ease-in-out`}
                >
                    {buttonText}
                </button>
            </form>
        </div>
    );
}
