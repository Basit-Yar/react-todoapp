/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        // 'csm' : {'max' : '420px'}
        'c-sm' : {'max' : '564px'} // this is custom size which I have introduced it means this will apply when the size of screen is less than or equal to 564px.
      }
    },
  },
  plugins: [],
}

