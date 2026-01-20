/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cosmicBlue: '#3B82F6',
        nebulaPurple: '#8B5CF6',
        auroraMint: '#22D3A7',
        solarYellow: '#FACC15',
        novaRed: '#F43F5E',
        deepSpace: '#0B0F19',
        starlightGray: '#1E293B',
        whiteSmoke: '#F9FAFB',
        satelliteGray: '#9CA3AF',
      },
    },
  },
  plugins: [],
}
