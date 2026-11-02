import type { Config } from 'tailwindcss';
const config: Config = { content:['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'], theme:{extend:{colors:{ink:'#080a0e',cream:'#efede6',amber:'#e9ad68',cyan:'#8fd8d2'},fontFamily:{sans:['Arial','sans-serif']}}}, plugins:[]}; export default config;
