import { useState } from "react";

export default function Docs() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full pb-4 flex justify-center bg-[#EDF0F2]">
                <div className="flex gap-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(!isOpen);
                        }}
                        className="hover:opacity-80 transition-all ease-in-out md:text-xs"
                    >
                        Реквизиты компании
                    </button>
                    <a
                        href="/oferta.pdf"
                        target="_blank"
                        className="hover:opacity-80 transition-all ease-in-out md:text-xs"
                    >
                        Публичная оферта
                    </a>
                </div>
            </div>
            {isOpen && (
                <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center">
                    <div
                        className="absolute w-full h-full bg-black opacity-50 z-10"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(!isOpen);
                        }}
                    ></div>
                    <div className="w-3/4 max-w-xl bg-white rounded-[30px] p-5 z-50">
                        <h4 className="text-[#2A609D] text-2xl mb-3 sm:text-xs">
                            Реквизиты компании:
                        </h4>
                        <p className="sm:text-xs">ООО &#34;Т-КАРД&#34;</p>
                        <p className="sm:text-xs">
                            <b>ИНН:</b> 7814760959
                        </p>
                        <p className="sm:text-xs">
                            <b>КПП:</b> 781401001
                        </p>
                        <p className="sm:text-xs">
                            <b>ОГРН:</b> 1197847143328
                        </p>
                        <p className="sm:text-xs">
                            <b>ОКПО:</b> 40331451
                        </p>
                        <p className="sm:text-xs">
                            <b>Расчетный счет:</b> 40702810002100005187
                        </p>
                        <p className="sm:text-xs">
                            <b>Банк:</b> ББР Банк (АО)
                        </p>
                        <p className="sm:text-xs">
                            <b>БИК:</b> 044525769
                        </p>
                        <p className="sm:text-xs">
                            <b>Корр. счет:</b> 30101810745250000769
                        </p>
                        <p className="sm:text-xs">
                            <b>Юридический адрес:</b> 197342, Санкт-Петербург г,
                            вн.тер.г. муниципальный округ Ланское, ул
                            Сердобольская, д. 64, литер К, помещ. 10-Н, ч.п.28.
                        </p>
                        <br />
                        <p className="sm:text-xs">
                            Монверс-Авто является проектом ООО &#34;Т-КАРД&#34;
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
