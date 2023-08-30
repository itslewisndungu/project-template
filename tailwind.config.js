/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./**/*.html",
        "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}

