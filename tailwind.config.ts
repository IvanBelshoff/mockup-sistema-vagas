import { warn } from "console";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        sucess: 'var(--color-sucess)',
        warning: 'var(--color-warning)',
        paper: 'var(--color-paper)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        'primary-contrast': 'var(--color-primary-contrast)'
      }
    },
  },
  plugins: [],
};
export default config;
