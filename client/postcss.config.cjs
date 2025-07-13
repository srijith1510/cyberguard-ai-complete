// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ NOT `tailwindcss`
    autoprefixer: {},
  },
};
