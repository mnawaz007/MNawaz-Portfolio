import {motion} from 'framer-motion';
import {fadein} from './variants.js'
export default function Pricing (){

    return(
        <>
        <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
  <symbol id="check" viewBox="0 0 16 16">
    <title>Check</title>
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
  </symbol>
</svg>
        <main>
            <h2 className="text-center text-danger">Price Plan</h2>
     <motion.div 
     variants={fadein('up', 0.2)}
     initial = 'hidden'
     whileInView={'show'}
     viewport={{once:false, amount:1}}

     className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <motion.div whileHover={{scale: 1.2}} className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </motion.div>
      </div>
      <div className="col">
        <motion.div whileHover={{scale: 1.2}} className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </motion.div>
      </div>
      <div className="col">
        <motion.div whileHover={{scale: 1.2}} className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-white bg-primary border-primary">
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <h2  className="display-6 text-center text-danger mb-4">Compare plans</h2>

    <motion.div whileHover={{scale: 1.1}}
    variants={fadein('left', 0.2)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={{once:false, amount:1}}
    className="table-responsive">
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{width: "34%"}}></th>
            <th style={{width: "22%"}}>Free</th>
            <th style={{width: "22%"}}>Pro</th>
            <th style={{width: "22%"}}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-start">Public</th>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Private</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" className="text-start">Permissions</th>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Sharing</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Unlimited members</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </main>
        </div>
        
        </>
    )
}