/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* black with opacity */
        input: "var(--color-input)", /* gray-50 */
        ring: "var(--color-ring)", /* gold */
        background: "var(--color-background)", /* white */
        foreground: "var(--color-foreground)", /* slate-800 */
        primary: {
          DEFAULT: "var(--color-primary)", /* slate-800 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* amber-700 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* gold */
          foreground: "var(--color-accent-foreground)", /* slate-800 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* slate-800 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* slate-800 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-500 */
          foreground: "var(--color-warning-foreground)", /* slate-800 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* gray-50 */
          foreground: "var(--color-surface-foreground)", /* slate-800 */
        },
        sanctuary: {
          white: "var(--color-sanctuary-white)", /* warm white */
          gray: "var(--color-sanctuary-gray)", /* soft gray */
        },
        warm: {
          gold: "var(--color-warm-gold)", /* dark goldenrod */
        },
        forest: {
          green: "var(--color-forest-green)", /* dark green */
        },
        deep: {
          sage: "var(--color-deep-sage)", /* dark slate gray */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '13': '3.25rem', /* 52px - golden ratio */
        '21': '5.25rem', /* 84px - golden ratio */
        '34': '8.5rem', /* 136px - golden ratio */
        '55': '13.75rem', /* 220px - golden ratio */
      },
      boxShadow: {
        'sanctuary-sm': 'var(--shadow-sm)',
        'sanctuary-md': 'var(--shadow-md)',
        'sanctuary-lg': 'var(--shadow-lg)',
        'sanctuary-xl': 'var(--shadow-xl)',
        'sanctuary-2xl': 'var(--shadow-2xl)',
        'portfolio': '0 4px 20px rgba(0,0,0,0.08)',
        'interactive': '0 8px 32px rgba(0,0,0,0.12)',
      },
      animation: {
        'sanctuary-breathe': 'sanctuary-breathe 8s ease-in-out infinite',
        'gentle-float': 'gentle-float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        'sanctuary-breathe': {
          '0%, 100%': { backgroundColor: 'var(--color-sanctuary-white)' },
          '50%': { backgroundColor: 'var(--color-sanctuary-gray)' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'sanctuary': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        'sanctuary': '10px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}