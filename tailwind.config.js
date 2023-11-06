/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                logo: "url('../../public/logo.svg')",
                mainBG: "url('../../public/mainBG.jpg')",
                logoRolf: "url('../../public/logoRolf.svg')",
                road: "url('../../public/road.svg')",
                'road-vert': "url('../../public/road-vert.svg')",
                "vk-icon": "url('../../public/vk-icon.svg')",
                "car-sm": "url('../../public/car-sm.svg')",
                "car-md": "url('../../public/car-md.svg')",
                "car-bg": "url('../../public/car-bg.svg')",
                "renault-logo": "url('../../public/renault-logo.svg')",
                "dacia-logo": "url('../../public/dacia-logo.svg')",
                "citroen-logo": "url('../../public/citroen-logo.svg')",
                "ford-logo": "url('../../public/ford-logo.svg')",
                "opel-logo": "url('../../public/opel-logo.svg')",
                "mercedes-logo": "url('../../public/mercedes-logo.svg')",
                "fiat-logo": "url('../../public/fiat-logo.svg')",
                "peugeot-logo": "url('../../public/peugeot-logo.svg')",
                "arrow-dropdown": "url('../../public/arrow-dropdown.svg')",
            },
        },
        screens: {
            "2xl": { max: "1600px" },
            // => @media (max-width: 1536px) { ... }

            "1.5xl": { max: "1400px" },
            // => @media (max-width: 1400px) { ... }

            xl: { max: "1280px" },
            // => @media (max-width: 1280px) { ... }

            lg: { max: "1070px" },
            // => @media (max-width: 1024px) { ... }

            'lg-min': {min: '1071px'},

            md: { max: "800px" },
            // => @media (max-width: 768px) { ... }

            '1.5sm': { max: "600px" },
            // => @media (max-width: 480px) { ... }

            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
            
            xsm: { max: "410px" },
            // => @media (max-width: 480px) { ... }

            xxsm: { max: "380px" },
            // => @media (max-width: 480px) { ... }
        },
        boxShadow: {
            max: "0px 11px 38px 0px rgba(80, 83, 97, 0.19)",
        },
    },
    plugins: [],
};
