/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./layouts/**/*.html"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
            fontFamily: {
                "poppins": ["Poppins", "sans-serif"],
                "ubuntu": ["Ubuntu", "sans-serif"]
            }
        },
        colors: {
            primary: "#27374D",
            secondary: "#526D82",
            neutral: "#DDE6ED",
            agressive: "#9DB2BF",
            white: "#DDE6ED",
            red: "#ff3333"
        },
    },
    plugins: [],
}

