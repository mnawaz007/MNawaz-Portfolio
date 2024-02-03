import {motion} from 'framer-motion';
// import {fadein} from './variants.js'
import myimage from'/public/myimage.png'
import insta from'/public/insta.jpeg'
import ytube from'/public/ytub.png'
import face from'/public/fb.jpeg'
export default function Main (){
    return(
        <motion.div 
        initial={{x : '100vw'}}
        animate={{x : 0}}
        transition={{type : 'spring' , delay : 0.5}}       
             className="container">
            <div className="row row-col-6">
                   <div className="px-4 py-5 my-5 text-center">               
             
           
    <img className="img-fluid d-block rounded-5 mx-auto mb-4" src={myimage}alt="image" width="200" height="200" /> 
    
    <h1 className="text-danger display-5 fw-bold     ">Welcome to M Nawaz Khans Web Development Hub!</h1>
    <h4 className="text-light">Greetings! I am  a passionate and innovative web developer dedicated to crafting remarkable digital experiences</h4>
    <motion.div 
    initial={{ opacity: 0 }}
    animate = {{ opacity: 1 }}  
    transition={{delay: 1.5 , duration:1}}
    className="col-lg-6 mx-auto">
    <h4 className="text-danger my-4"> Why Choose Me !! </h4>
      <p className="lead mb-4 text-light">I believe in the power of collaboration and communication. I work closely with clients to understand their vision, goals, and brand identity, ensuring the end result exceeds expectations. Your success is my priority.</p>
      <hr className =" w-75 mx-auto border border-danger border-2 opacity-50"/>
    </motion.div>

    <motion.div 
    initial={{ opacity: 0 }}
    animate = {{ opacity: 1 }}  
    transition={{delay: 2 , duration:1}}    
    className="container">
    <section>
        <h2 className="text-danger"> Let.s Connect</h2>
        <p className="text-light">Feel free to reach out and connect with me on social media:</p>
       
            <p><a href="#" target="_blank"><img className="img-fluid  rounded-5 mx-auto " width="80" height="100"  src={insta} alt="LinkedIn"/></a>
            <a href="#" target="_blank"><img className="img-fluid  rounded-5 mx-5 " width="80" height="100"  src={face} alt="Twitter"/></a>
            <a href="#" target="_blank"><img className="img-fluid  rounded-5 mx-auto " width="80" height="80"  src={ytube} alt="youtube"/></a></p>
            <hr className =" w-75 mx-auto border border-danger border-2 opacity-50"/>
    </section>
   
    </motion.div>
  </div>
            </div>
             
        </motion.div>
    )
}