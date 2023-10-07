# Compatibility Note

Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

# How to run?

Write those commands inside `client` directory:

```sh
npm install
npm run dev
```

# React Project Structure

This README provides an overview of the recommended project structure for a React application. Structuring your project efficiently can make development and maintenance more manageable. Below, we'll outline the key directories and their purposes.

## Project Structure

```
client/
├── src/
| ├── App.tsx
| ├── assets/
| ├── pages/
| | ├── Page1.tsx
| | ├── Page2.tsx
| | └── ...
| ├── components/
| ├── hooks/
| ├── layouts/
| ├── model/
| ├── styles/
| └── ...
├── public/
├── package.json
├── README.md
└── ...
```


### 1. `src/`

The `src/` directory is the heart of your React application. It contains the main source code.

### 2. `App.tsx`

`App.tsx` serves as the entry point of your application. It often includes routing configurations, so you can manage the paths and navigation within your app here.

### 3. `assets/`

The `assets/` directory is where you should place static files such as images, fonts, or other resources that your application may require.

### 4. `pages/`

The `pages/` directory typically contains React components representing different pages or views in your application. Each page should have its own directory or file.

### 5. `components/`

Inside the `components/` directory, you can place reusable UI components that are used across multiple pages or within other components.

### 6. `hooks/`

The `hooks/` directory is where you should put custom hooks used for things like data fetching, state management, or other shared functionality.

### 7. `layouts/`

If you have components that are shared among multiple pages or components (e.g., headers, footers, sidebars), you can place them in the `layouts/` directory.

### 8. `model/`

In the `model/` directory, you can define static data structures, types, or models used throughout your application.

### 9. `styles/`

The `styles/` directory is where you should put your CSS, SCSS, or other styling files for pages and components. It helps keep your styles organized and separated from your components.


## Conclusion

This project structure should help you organize your React application effectively, making it easier to develop and maintain. Feel free to adapt it to your specific project's needs.

# Creating a new page

When creating a new page in your application, consider using the `<Page>` component as a starting point. This component can serve as a template for your new pages and includes common layout elements. You can customize the layout further by adding conditional variables or props as needed.

# Hooks

For hooks use the best idea is to use generic ones that can be found [here](https://usehooks-ts.com/introduction).