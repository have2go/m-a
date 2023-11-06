// import Image from 'next/image'

'use client'
import Main from "@/components/Main";
import FormSection from "@/components/FormSection";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";
import CatalogSection from "@/components/CatalogSection";
import Docs from "@/components/Docs";

// import Link from "next/link";

export default function Home() {
    return (
        <>
            <Main />
            <CatalogSection />
            <FormSection />
            <About />
            <HowWeWork />
            <Docs />
            <Footer />
        </>
    );
}
