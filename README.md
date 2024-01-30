# Namaste React 

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling - Its main job is to bundle all the files
- Compressing the files 
- Consitent hashing
- Code splitting
- Differential Bundling - support older browser
- Diagnostics
- Error handling
- HTTPs 
- Tree Shaking - remove unused code

# Application Structure
  
- Header
    - Logo
    - Navigation
- Body
    - Search container
    - Restaurant Container
    - Restaurant Card
- Footer
    - Copyright
    - Links 
    - Address
    - Contact
 
 
# Two types of Export/import

- Default Export/Import
    - export default Component;
    - import Component from "path";

- Named export/import
    - export const Component;
    - import {Component} from "path";

# 2 types of Routing in web apps 
- Client side Routing
- Server side Routing

Controlled vs Uncontrolled Componnent

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux (npm install @reduxjs/toolkit and npm i react-redux)
- Build our store
- Connect our store with app
- Slice (cartslice) create a slice to add item in cart
- dispatch an action
- read the data with Selector

# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing

# Setting up testing in our app
- Install React testing library - npm install --save-dev @testing-library/react
- Install Jest - npm install --save-dev jest
- Installed Babel dependencies - npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configure Babel - babel.config.js
- Configure Parcel config file to disable default babel transpilation - .parcelrc
- Jest - npx jest --init
- Install jsdom library - npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config 
- Install @testing-library/jest-dom



