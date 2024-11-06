const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', ['[data-theme*="dark"]']],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'public/**/*.{ts,tsx}',
  ],
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
        6000: '6000ms',
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
          '0%, 4%, 10%, 32%, 50%, 54%, 60%, 68%, 72%, 82%, 90%, 100%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '2%, 52%, 70%, 86%': {
            transform: 'rotate(0deg) translateY(-5%) translateX(-5%)',
          },
          '8%, 12%, 28%, 58%': {
            transform: 'rotate(0deg) translateY(-10%) translateX(-10%)',
          },
          '20%': {
            transform: 'rotate(-90deg) translateY(-10%) translateX(-10%)',
          },
        },
        'ghost-tr': {
          '0%, 4%, 10%, 32%, 50%, 54%, 60%, 68%, 72%, 82%, 90%, 100%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '2%, 52%, 70%, 86%': {
            transform: 'rotate(0deg) translateY(-5%) translateX(5%)',
          },
          '8%, 12%, 28%, 58%': {
            transform: 'rotate(0deg) translateY(-10%) translateX(10%)',
          },
          '20%': {
            transform: 'rotate(-90deg) translateY(-10%) translateX(10%)',
          },
        },
        'ghost-bl': {
          '0%, 4%, 10%, 32%, 50%, 54%, 60%, 68%, 72%, 82%, 90%, 100%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '2%, 52%, 70%, 86%': {
            transform: 'rotate(0deg) translateY(5%) translateX(-5%)',
          },
          '8%, 12%, 28%, 58%': {
            transform: 'rotate(0deg) translateY(10%) translateX(-10%)',
          },
          '20%': {
            transform: 'rotate(-90deg)  translateY(10%) translateX(-10%)',
          },
        },
        'ghost-br': {
          '0%, 4%, 10%, 32%, 50%, 54%, 60%, 68%, 72%, 82%, 90%, 100%': {
            'transform-origin': '50% 50%',
            transform: 'rotate(0deg) translateY(0%) translateX(0%)',
          },
          '2%, 52%, 70%, 86%': {
            transform: 'rotate(0deg) translateY(5%) translateX(5%)',
          },
          '8%, 12%, 28%, 58%': {
            transform: 'rotate(0deg) translateY(10%) translateX(10%)',
          },
          '20%': {
            transform: 'rotate(-90deg) translateY(10%) translateX(10%)',
          },
        },
        'ghost-micro-movements': {
          '0%, 12.5%, 25%, 37.5%, 50%, 62.5%, 75%, 87.5%, 100%': {
            'transform-origin': '50% 50%',
            transform: 'translateY(0%) translateX(0%)',
          },
          // these first lil bits are for movement when moving around the page
          '2%': {
            transform: 'translateY(-2%) translateX(-2%)',
          },
          '4%': {
            transform: 'translateY(-4%) translateX(4%)',
          },
          '7%': {
            transform: 'translateY(3%) translateX(2%)',
          },
          '9%': {
            transform: 'translateY(-2%) translateX(5%)',
          },
          // stationary move
          '14%': {
            transform: 'translateY(-10%) translateX(-10%)',
          },
          '18%': {
            transform: 'translateY(-13%) translateX(-8%)',
          },
          '20%': {
            transform: 'translateY(-8%) translateX(8%)',
          },
          '22%': {
            transform: 'translateY(5%) translateX(5%)',
          },
          // moving move
          '27%': {
            transform: 'translateY(-4%) translateX(4%)',
          },
          '30%': {
            transform: 'translateY(-5%) translateX(2%)',
          },
          '32%': {
            transform: 'translateY(-6%) translateX(3%)',
          },
          '34%': {
            transform: 'translateY(-3%) translateX(2%)',
          },
          // stationary move
          '39%': {
            transform: 'translateY(6%) translateX(2%)',
          },
          '42%': {
            transform: 'translateY(7%) translateX(5%)',
          },
          '44%': {
            transform: 'translateY(-8%) translateX(-8%)',
          },
          '48%': {
            transform: 'translateY(-7%) translateX(2%)',
          },
          // moving move
          '52%': {
            transform: 'translateY(2%) translateX(5%)',
          },
          '54%': {
            transform: 'translateY(-3%) translateX(0%)',
          },
          '57%': {
            transform: 'translateY(0%) translateX(2%)',
          },
          '59%': {
            transform: 'translateY(-2%) translateX(5%)',
          },
          // stationary move
          '65%': {
            transform: 'translateY(3%) translateX(-5%)',
          },
          '68%': {
            transform: 'translateY(-10%) translateX(-8%)',
          },
          '70%': {
            transform: 'translateY(-8%) translateX(-4%)',
          },
          '72%': {
            transform: 'translateY(3%) translateX(-2%)',
          }, // moving move
          '77%': {
            transform: 'translateY(0%) translateX(2%)',
          },
          '79%': {
            transform: 'translateY(5%) translateX(2%)',
          },
          '81%': {
            transform: 'translateY(3%) translateX(4%)',
          },
          '84%': {
            transform: 'translateY(-2%) translateX(1%)',
          },
          // stationary move
          '89%': {
            transform: 'translateY(5%) translateX(0%)',
          },
          '91%': {
            transform: 'translateY(3%) translateX(-2%)',
          },
          '95%': {
            transform: 'translateY(4%) translateX(-3%)',
          },
          '97%': {
            transform: 'translateY(-5%) translateX(-2%)',
          },
        },
        'flip-words': {
          // pretty sure there's an easier way to do this lol. another days prob
          '8.33%': { transform: 'translateY(-112%)' },
          '16.66%': { transform: 'translateY(-100%)' },
          '25%': { transform: 'translateY(-212%)' },
          '33.33%': { transform: 'translateY(-200%)' },
          '41.66%': { transform: 'translateY(-312%)' },
          '50%': { transform: 'translateY(-300%)' },
          '58.33%': { transform: 'translateY(-412%)' },
          '66.66%': { transform: 'translateY(-400%)' },
          '75%': { transform: 'translateY(-512%)' },
          '83.33%': { transform: 'translateY(-500%)' },
          '91.66%': { transform: 'translateY(-612%)' },
          '100%': { transform: 'translateY(-600%)' },
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
        'ghost-micro-movements':
          'ghost-micro-movements 24s ease-in-out infinite',
        middle: 'middle 5s linear infinite',
        'flip-words': 'flip-words 8s infinite',
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
