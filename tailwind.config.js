/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fdfaec",
        text2: "#002d4f",
        nero: "#fff",
        text: "#000e18",
        gray: "rgba(255, 255, 255, 0.16)",
        khaki: "#e8d380",
      },
      spacing: {},
      fontFamily: {
        rokkitt: "Rokkitt",
        inter: "Inter",
        inherit: "inherit",
        arial: "Arial",
      },
      backgroundImage: {
        map: "url('./public/images/albania-map.webp')",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
