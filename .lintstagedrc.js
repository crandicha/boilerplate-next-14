module.exports = {
  '**/*.ts?(x)': () => 'tsc --noEmit --pretty',
  '**/*.{js,ts,jsx,tsx}': [
    'eslint --fix --max-warnings=0',
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((file) => file.split(process.cwd())[1])
        .join(' --file ')}`,
  ],
  '**/*.{js,jsx,ts,tsx,css,scss,md,mdx}': 'prettier --write',
  '**/*.{css,scss}': 'stylelint --fix',
}
