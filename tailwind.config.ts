import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#07080d', panel: '#10131d', line: '#252a37', neon: '#b6ff4d', violet: '#8b5cf6' }, boxShadow: { glow: '0 0 40px rgba(182,255,77,.12)' } } }, plugins: [] };
export default config;
