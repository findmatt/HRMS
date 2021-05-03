module.exports = {
    purge: [],
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    // eslint-disable-next-line global-require
    plugins: [require('daisyui')],

    // config
    daisyui: {
        styled: true,
        themes: false,
        resets: true,
        utils: true,
        logs: true,
        rtl: false,
    },
};
