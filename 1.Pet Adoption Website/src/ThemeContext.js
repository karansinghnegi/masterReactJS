import { createContext } from 'react';

const ThemeContext = createContext( ["green", () => {}] );

console.log(ThemeContext)

export default ThemeContext;