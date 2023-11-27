# UI Components Library
## Description
This UI Components Library is a collection of reusable and customizable user interface elements built with Tailwind CSS, Rollup, Storybook, and TypeScript. It provides a set of modern and sleek components to streamline the development of web applications.

## Features
- **Tailwind CSS:** Utilizes the utility-first approach for easy customization and styling.
- **Rollup:** Employs the Rollup bundler for efficient and optimized library builds.
- **Storybook:** Offers a development environment for component documentation and testing.
- **Typescript:** Provides type safety and enhanced code quality.
- **SCSS:** is a popular CSS preprocessor that allows for more maintainable and modular styles

# Building the Library
To build the library locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/your-username/ui-components-library.git
```
Navigate to the project directory:

```bash
cd ui-components-library
```
## Install dependencies:

```bash
npm install
```
## Build the library:

```bash
npm run build
```

# Usage 
## Installation of Dependencies
Before using any components from the library, make sure to install the required dependencies. You can do this by running:

```bash
npm install --save tailwindcss
npm install --save-dev rollup typescript
```

## Installation of the Library
Install the UI Components Library in your project:

```bash
npm install --save @your-username/ui-components-library
```

## Import and use the Button component in your code:
```bash
import { Button } from '@your-username/ui-components-library';

// Use the Button component in your application
const MyComponent = () => {
  return (
    <Button onClick={() => console.log('Button clicked')}>Click me</Button>
  );
};
```
## Documentation and Development
To explore and test the components, run Storybook locally:

```bash
npm run storybook
```
Visit http://localhost:6006 to access the Storybook environment and view the documentation and examples.
