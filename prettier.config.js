module.exports = async () => {
  const tailwindcssPlugin = await import('prettier-plugin-tailwindcss');
  return {
    tabWidth: 2,
    useTabs: false,
    plugins: [tailwindcssPlugin],
  };
};
