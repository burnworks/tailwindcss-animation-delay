const plugin = require('tailwindcss/plugin')

const animationDelay = plugin(
    function ({ addUtilities, theme, e }) {
        const values = theme('animationDelay')
        var utilities = Object.entries(values).map(([key, value]) => {
            return {
                [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}ms` },
            }
        })
        addUtilities(utilities)
    },
    {
        theme: {
            animationDelay: {
                75: '75',
                100: '100',
                150: '150',
                200: '200',
                300: '300',
                400: '400',
                500: '500',
                600: '600',
                700: '700',
                800: '800',
                900: '900',
                1000: '1000',
                1100: '1100',
                1200: '1200',
                1300: '1300',
                1400: '1400',
                1500: '1500',
                2000: '2000',
                3000: '3000',
                4000: '4000',
                5000: '5000',
                6000: '6000',
                7000: '7000',
                8000: '8000',
                9000: '9000',
            },
        },
    },
)
module.exports = animationDelay