import './toggle.css'
import {useContext} from 'react'
import { ThemeContext } from '../../contex'
export default function Toggle() {
       const theme = useContext(ThemeContext)

       function handleClick(){
            theme.dispatch({type:'TOGGLE'})         
       }
       return (
              <div className="t">
                     <i className=" t-icon fa-solid fa-sun"></i>
                     <i className=" t-icon fa-solid fa-moon"></i>
                     <div className="t-button" 
                     onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 27,
                      backgroundColor: theme.state.darkMode ? "yellow": "#999"}}></div>
              </div>
       )
}
