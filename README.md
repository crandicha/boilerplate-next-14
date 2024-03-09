# Next 14 Boilerplate

This is a Next 14 boilerplate project, intended to be used as a starting point for new projects.

## Getting Started

1. Clone this repo

    ``` bash
    git clone git@github.com:crandicha/boilerplate-next-14.git
    ```

2. Install dependencies

    ``` bash
    pnpm install
    ```

3. Check optional packages (remove based on usage)

    - TailwindCSS (CSS framework) (automatically installed by create-next-app)

      ``` bash
      pnpm remove tailwindcss
      ```
    - Zustand (state management)

      ``` bash
      pnpm remove zustand
      ```

    - React Query (data fetching) (not recommended to remove)

      ``` bash
        pnpm remove react-query
        ```


4. Start the development server

    ``` bash
    pnpm run dev
    ```

## Todo

- Add `husky` and `lint-staged` to run `prettier` and `eslint` and `commitlint` on commit
- Jest
- React Testing Library
- Eslint testing library
- Setup script / command to squash commits on new clone
