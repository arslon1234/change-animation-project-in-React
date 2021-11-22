import React from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './contex';
import {useContext} from 'react'
import Cursor from './Cursor';
import './App.css'
export default function App({mouseOverEvent, mouseOutEvent}) {
      const theme = useContext(ThemeContext)
      const darkMode = theme.state.darkMode
       return (
              <div style={{backgroundColor:darkMode ? "#222": 'white', color: darkMode && 'white'}}>
                   <Cursor/>
                   <Toggle onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}/>
                   <Intro/>
                   <About/>
                   <ProductList/>
                   <Contact/>
                  
              </div>
              
       )
}
