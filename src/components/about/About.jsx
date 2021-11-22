import "./about.css"
import web from '../../assets/images/web.jpg'
import award from '../../assets/images/award.png'
export default function About() {
       return (
              <div className="a">
                  <div className="a-left">
                         <div className="a-card bg"></div>
                         <div className="a-card">
                                <img src={web} className="a-img" alt="" />
                         </div>
                  </div>
                  <div className="a-right">
                         <h1 className="">About Me</h1>
                         <p className="a-sub">
                         The encoded method can either be pre-rendered with the video or separate as either a graphic or text to be rendered and overlaid by the receiver.
                         </p>
                         <p className="a-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci earum sapiente rerum, deleniti mollitia harum? Cupiditate molestiae a vero minima quasi hic deleniti officiis. Perferendis, officia deleniti! Neque, accusamus.
                             a vero minima quasi hic deleniti officiis. Perferendis, officia deleniti! Neque, accusamus.

                         </p>
                         <div className="a-award">
                                <img src={award} alt="" className="a-award-img" />
                                <div className="a-award-text">
                                       <h4 className="a-award-title">International Design</h4>
                                       <p className="a-award-desc">
                                              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                       </p>
                                </div>
                         </div>
                  </div>
              </div>
       )
}
