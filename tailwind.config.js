module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ta-red": {
          DEFAULT: "#CC1417",
          1: "#4D0809",
          2: "#8C0E10",
          3: "#B31215",
          4: "#CC1417",
          5: "#D91619",
        },
        "ta-grey": {
          DEFAULT: "#7A7A7A",
          1: "#3B3B3B",
          2: "#7A7A7A",
          3: "#BABABA",
          4: "#E0E0E0",
          5: "#FAFAFA",
        },
        "ta-white": "#FAFAFA",
        agency: {
          DEFAULT: "#B2292E",
          highlight: "#731A1D",
          dark: "#292929",
          gray: "#8D8D8D",
          light: "#C2C2C2",
          white: "#FCFCFC",
        },
        primary: "#b2292e",
        "primary-dark": "#731A1D",
        "primary-light": "#FF3B41",
        secondary: "#8D8D8D",
        "secondary-dark": "#4D4D4D",
        "secondary-light": "#D9D9D9",
        "a-white": "#fcfcfc",
      },
      fontFamily: {
        main: ["Roboto", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        alt: ["Oswald", "sans-serif"],
      },
      screens: {
        sm: "320px",
        "max-sm": { max: "320px" },
        "s-med": "480px",
        "max-s-med": { max: "480px" },
        med: "640px",
        "max-med": { max: "640px" },
        "xl-med": "760px",
        "max-xl-med": { max: "760px" },
        "s-large": "960px",
        "max-s-large": { max: "960px" },
        large: "1040px",
        "max-large": { max: "1040px" },
        "xl-large": "1120px",
        "max-xl-large": { max: "1120px" },
        wide: "1200px",
        "max-wide": { max: "1200px" },
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
      },
      spacing: {
        "d-0-px": "0px",
        "d-0-rem": "0rem",
        "d-1-px": "1px",
        "d-1-rem": "0.0625rem",
        "d-2-px": "2px",
        "d-2-rem": "0.125rem",
        "d-3-px": "3px",
        "d-3-rem": "0.1875rem",
        "d-4-px": "4px",
        "d-4-rem": "0.25rem",
        "d-5-px": "5px",
        "d-5-rem": "0.3125rem",
        "d-6-px": "6px",
        "d-6-rem": "0.375rem",
        "d-7-px": "7px",
        "d-7-rem": "0.4375rem",
        "d-8-px": "8px",
        "d-8-rem": "0.5rem",
        "d-9-px": "9px",
        "d-9-rem": "0.5625rem",
        "d-10-px": "10px",
        "d-10-rem": "0.625rem",
        "d-11-px": "11px",
        "d-11-rem": "0.6875rem",
        "d-12-px": "12px",
        "d-12-rem": "0.75rem",
        "d-13-px": "13px",
        "d-13-rem": "0.8125rem",
        "d-14-px": "14px",
        "d-14-rem": "0.875rem",
        "d-15-px": "15px",
        "d-15-rem": "0.9375rem",
        "d-16-px": "16px",
        "d-16-rem": "1rem",
        "d-20-px": "20px",
        "d-20-rem": "1.25rem",
        "d-24-px": "24px",
        "d-24-rem": "1.5rem",
        "d-28-px": "28px",
        "d-28-rem": "1.75rem",
        "d-32-px": "32px",
        "d-32-rem": "2rem",
        "d-36-px": "36px",
        "d-36-rem": "2.25rem",
        "d-40-px": "40px",
        "d-40-rem": "2.5rem",
        "d-44-px": "44px",
        "d-44-rem": "2.75rem",
        "d-48-px": "48px",
        "d-48-rem": "3rem",
        "d-56-px": "56px",
        "d-56-rem": "3.5rem",
        "d-64-px": "64px",
        "d-64-rem": "4rem",
        "d-72-px": "72px",
        "d-72-rem": "4.5rem",
        "d-80-px": "80px",
        "d-80-rem": "5rem",
        "d-88-px": "88px",
        "d-88-rem": "5.5rem",
        "d-96-px": "96px",
        "d-96-rem": "6rem",
        "d-104-px": "104px",
        "d-104-rem": "6.5rem",
        "d-112-px": "112px",
        "d-112-rem": "7rem",
        "d-120-px": "120px",
        "d-120-rem": "7.5rem",
        "d-128-px": "128px",
        "d-128-rem": "8rem",
        "d-136-px": "136px",
        "d-136-rem": "8.5rem",
        "d-144-px": "144px",
        "d-144-rem": "9rem",
        "d-152-px": "152px",
        "d-152-rem": "9.5rem",
        "d-160-px": "160px",
        "d-160-rem": "10rem",
        "d-168-px": "168px",
        "d-168-rem": "10.5rem",
        "d-176-px": "176px",
        "d-176-rem": "11rem",
        "d-184-px": "184px",
        "d-184-rem": "11.5rem",
        "d-192-px": "192px",
        "d-192-rem": "12rem",
        "d-200-px": "200px",
        "d-200-rem": "12.5rem",
        "d-208-px": "208px",
        "d-208-rem": "13rem",
        "d-216-px": "216px",
        "d-216-rem": "13.5rem",
        "d-224-px": "224px",
        "d-224-rem": "14rem",
        "d-232-px": "232px",
        "d-232-rem": "14.5rem",
        "d-240-px": "240px",
        "d-240-rem": "15rem",
        "d-248-px": "248px",
        "d-248-rem": "15.5rem",
        "d-256-px": "256px",
        "d-256-rem": "16rem",
        "d-264-px": "264px",
        "d-264-rem": "16.5rem",
        "d-272-px": "272px",
        "d-272-rem": "17rem",
        "d-280-px": "280px",
        "d-280-rem": "17.5rem",
        "d-288-px": "288px",
        "d-288-rem": "18rem",
        "d-296-px": "296px",
        "d-296-rem": "18.5rem",
        "d-304-px": "304px",
        "d-304-rem": "19rem",
        "d-312-px": "312px",
        "d-312-rem": "19.5rem",
        "d-320-px": "320px",
        "d-320-rem": "20rem",
      },
      height: () => ({
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "200vh": "200vh",
      }),
      fontSize: (theme) => ({
        ...theme("spacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("height"),
        ...theme("screens"),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("height"),
        ...theme("screens"),
      }),
      borderWidth: (theme) => ({
        ...theme("spacing"),
      }),
      letterSpacing: {
        0.125: "0.125em",
        0.15: "0.15em",
        0.25: "0.25em",
        0.5: "0.5em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
