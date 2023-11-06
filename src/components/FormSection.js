"use client";
import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";
import { signika } from "@/app/fonts";

export default function FormSection() {
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
                "template_cp41ltu",
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
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="bg-[#EDF0F2] w-full pt-14 pb-28 scroll-mt-[84px] 1.5sm:pb-20" id="contact">
            <div className="max-w-[1500px] w-full mx-auto flex flex-col items-center 2xl:max-w-7xl 1.5xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl 1.5sm:max-w-md">
                <h2 className={`${signika.className} text-[42px] font-normal text-black mx-auto w-fit pb-14 md:text-3xl md:pb-8 1.5sm:text-2xl sm:text-xl`}>
                    Нужна помощь в подборе машины?
                </h2>
                <p className="text-lg font-normal text-black pb-14 md:pb-8 1.5sm:text-base sm:text-sm">
                    Оставьте заявку нашему менеджеру
                </p>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-lg w-full flex flex-col gap-5"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="ФИО"
                        className="p-5 outline-[#2A609D] bg-white rounded-full text-black text-base w-full md:p-4 1.5sm:w-3/4 mx-auto"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        className="p-5 outline-[#2A609D] bg-white rounded-full text-black text-base md:p-4 w-full 1.5sm:w-3/4 mx-auto"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <InputMask
                        mask="+7\ (999) 999-99-99"
                        type="text"
                        name="user_phone"
                        placeholder="Телефон"
                        className="p-5 outline-[#2A609D] bg-white rounded-full text-black text-base md:p-4 w-full 1.5sm:w-3/4 mx-auto"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        className={`${
                            isSuccess ? "bg-green-700" : "bg-[#2A609D]"
                        } p-5 rounded-full text-white text-sm md:p-4 w-full 1.5sm:w-3/4 mx-auto hover:opacity-80 transition-all ease-in-out`}
                    >
                        {buttonText}
                    </button>
                </form>
            </div>
        </section>
    );
}
