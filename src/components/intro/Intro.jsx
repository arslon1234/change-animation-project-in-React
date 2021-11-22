import './intro.css'
import Me from '../../assets/images/img7.png'
import MeTwo from '../../assets/images/img9.png'
import { ThemeContext } from '../../contex'
import { useContext } from 'react'
export default function Intro() {
       const theme = useContext(ThemeContext)

       return (
              <div className="i">
                     <div className="i-left">
                            <div className="i-left-wrapper">
                                   <h2 className="i-intro">Hello, My name is</h2>
                                   <h2 className="i-name">ArslonBek</h2>
                                   <div className="i-title">
                                          <div className="i-title-wrapper">
                                                 <div style={{color: theme.state.darkMode ? "#ccc" : "#244458"}} className="i-title-item">Web Developer</div>
                                                 <div style={{color: theme.state.darkMode ? "#ccc" : "#244458"}} className="i-title-item">UI/UX Design</div>
                                                 <div style={{color: theme.state.darkMode ? "#ccc" : "#244458"}} className="i-title-item">Photography</div>
                                                 <div style={{color: theme.state.darkMode ? "#ccc" : "#244458"}} className="i-title-item">Writer</div>
                                          </div>
                                   </div>
                                   <p className="i-desc">
                                          Okay, My name is ArslonBek and I am a Web Developer. 
                                          I have more passion to learn JavaScript, Reactjs and working with it. In addition, I can create more modern websites , web server
                                           and online stores. 
                                   </p>
                            </div>
                     </div>
                     <div className="i-right">
                     <div className="i-bg" style={{backgroundColor: theme.state.darkMode ? "white" : "#4c6170"}}></div>
                     <img src={Me}  style={{display: theme.state.darkMode ? "none" : "block"}} className="i-img" alt="image-without-background" />
                     <img src={MeTwo} style={{display: theme.state.darkMode ? "block" : "none"}} className="i-img-two" alt="image-without-background" />
                     </div>
              </div>
       )
}
