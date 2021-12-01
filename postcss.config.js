module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined, // this does create the error: 'A null PostCSS plugin was provided. This entry will be ignored.' see comments here: https://stackoverflow.com/questions/64196941/next-js-a-null-postcss-plugin-was-provided
    'postcss-preset-env',
  ],
}
