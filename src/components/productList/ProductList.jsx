import './productList.css'
import Product from '../product/Product'
import {product} from '../../data'
export default function ProductList() {
       return (
              <div className="pl">
                    <div className="pl-text">
                           <h1 className="pl-title"> Create WebSite</h1>
                           <p className="pl-desc">
                           React makes it painless to create interactive UIs.
                            Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                           </p>
                    </div>
                    <div className="pl-list">
                    {
                           product.map((item)=>(
                            <Product img={item.img} key={item.id} link={item.link}/>
                           ))
                    }
                           
                          
                    </div>
              </div>
       )
}
