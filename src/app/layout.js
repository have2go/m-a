import { montserrat } from "./fonts";
import "./globals.css";



export const metadata = {
    title: "Монверс-Авто",
    description: "Коммерческий транспорт",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru" className="scroll-smooth">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
