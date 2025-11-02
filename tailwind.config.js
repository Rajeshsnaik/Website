/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Add paths to all your component and page files here
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            // 1. Custom Colors for Brand Palette
            colors: {
                'dark-blue': '#355694',
                'light-blue': '#2DACE3',
                'orange-accent': '#F6A25C',
            },

            // 2. Custom Keyframes for Infinite Carousel Animation
            keyframes: {
                'slide-loop': {
                    // Starts at 0% translation
                    '0%': { transform: 'translateX(0%)' },
                    // Ends at -50% translation (slides exactly half the total content, 
                    // allowing the duplicated logos to seamlessly loop)
                    '100%': { transform: 'translateX(-50%)' },
                },
            },

            // 3. Custom Animation Utility Class
            animation: {
                // Class name: animate-slide-loop
                'slide-loop': 'slide-loop 30s linear infinite',
            },

            // Add other customizations here if needed (e.g., custom fonts, shadows, etc.)
        },
    },
    plugins: [],
}