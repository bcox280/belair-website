const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', ['[data-theme*="dark"]']],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      transitionDelay: {
        1300: '1300ms',
        2000: '2000ms',
        2300: '2300ms',
        2600: '2600ms',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      keyframes: {
        'text-glow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        siren: {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        friend: {
          '0%': { transform: 'translateY(-20%) translateX(-50%)' },
          '100%': { transform: 'translateY(300%) translateX(-50%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        raindrop: {
          '0%': {
            opacity: '0.8',
            transform: 'translate(0, -64rem) scale(1)',
          },
          '100%': {
            transform: 'scale(0.5)',
            opacity: '1',
          },
        },
        ripple: {
          '25%': {
            opacity: '50%',
          },
          '50%': {
            opacity: '25%',
          },
          '75%': {
            opacity: '10%',
          },
          '100%': {
            transform: 'scale(6)',
            opacity: '0',
          },
        },
        'ripple-large': {
          // okay so i kinda want this to end up taking the whole screen, scaling will be annoying tho
          '25%': {
            opacity: '50%',
          },
          '50%': {
            opacity: '25%',
          },
          '75%': {
            opacity: '10%',
          },
          '100%': {
            transform: 'scale(48)',
            opacity: '0',
          },
        },
        'ghost-tl': {
          '0%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg)',
          },
          '5%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(-10%) translateX(-10%)',
          },
          '10%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '25%': {
            transform: 'rotate(-90deg)',
            'transform-origin': '50% 50%',
          },
          '50%': {
            transform: 'rotate(-180deg)',
            'transform-origin': '50% 50%',
          },
          '75%': {
            transform: 'rotate(-270deg)',
            'transform-origin': '50% 50%',
          },
          '100%': {
            transform: 'rotate(-360deg)',
            'transform-origin': '50% 50%',
          },
        },
        'ghost-tr': {
          '0%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg)',
          },
          '5%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(-10%) translateX(10%)',
          },
          '10%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '25%': {
            transform: 'rotate(-90deg)',
            'transform-origin': '50% 50%',
          },
          '50%': {
            transform: 'rotate(-180deg)',
            'transform-origin': '50% 50%',
          },
          '75%': {
            transform: 'rotate(-270deg)',
            'transform-origin': '50% 50%',
          },
          '100%': {
            transform: 'rotate(-360deg)',
            'transform-origin': '50% 50%',
          },
        },
        'ghost-bl': {
          '0%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg)',
          },
          '5%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(10%) translateX(-10%)',
          },
          '10%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '25%': {
            transform: 'rotate(-90deg)',
            'transform-origin': '50% 50%',
          },
          '50%': {
            transform: 'rotate(-180deg)',
            'transform-origin': '50% 50%',
          },
          '75%': {
            transform: 'rotate(-270deg)',
            'transform-origin': '50% 50%',
          },
          '100%': {
            transform: 'rotate(-360deg)',
            'transform-origin': '50% 50%',
          },
        },
        'ghost-br': {
          '0%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg)',
          },
          '5%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(10%) translateX(10%)',
          },
          '10%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '25%': {
            transform: 'rotate(-90deg)',
            'transform-origin': '50% 50%',
          },
          '50%': {
            transform: 'rotate(-180deg)',
            'transform-origin': '50% 50%',
          },
          '75%': {
            transform: 'rotate(-270deg)',
            'transform-origin': '50% 50%',
          },
          '100%': {
            transform: 'rotate(-360deg)',
            'transform-origin': '50% 50%',
          },
        },
        middle: {
          to: {
            'transform-origin': '50% 50%',
            transform: 'translateX(5000%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'glow-text': 'text-glow 5s infinite',
        'accordion-up': 'accordion-up 0.2s ease-out',
        siren: 'siren 2s linear infinite',
        'ghost-tl': 'ghost-tl 5s linear infinite',
        'ghost-tr': 'ghost-tr 5s linear infinite',
        'ghost-bl': 'ghost-bl 5s linear infinite',
        'ghost-br': 'ghost-br 5s linear infinite',
        middle: 'middle 5s linear infinite',
        raindrop: 'raindrop 2s',
        friend: 'friend 2s ease-in-out infinite',
        ripple: 'ripple 4s cubic-bezier(.01,.47,.96,.58)',
        // this is for the button click on the loading page. 3s is aligned with that. two animation libs are interfering with
        // doing animation timing in css, so resorting to setting here.
        'ripple-large': 'ripple-large 3s cubic-bezier(.09,.36,1,.61)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
