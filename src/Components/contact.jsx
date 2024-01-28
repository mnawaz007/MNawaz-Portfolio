export default function Contact() {

    return (
        <>   
        <div className="container text-center"  >
                <section>
    <h2 className="text-danger">Contact Me</h2>
    <p className="text-light">Feel free to reach out to me using the information below:</p>
    <p className="text-light"><strong>Email:</strong> your.email@example.com</p>
    <p className="text-light"><strong>Phone:</strong> (123) 456-7890</p>
    
</section>
<section>
    <h2  className="text-danger">Subscribe For NewsLetter</h2>
    <form action="#" method="post">
        <p><label className="text-light" htmlFor=" name "> Name   </label>
        <br/>
        <input type="text" id="name" name="name" required/> </p>
        
        <p>  <label className="text-light" htmlFor="email">Email:</label>
        <br/>
        <input type="email" id="email" name="email" required/> </p>
       

        <button type="submit">Subscribe</button>
    </form>
</section>
<hr className =" w-75 mx-auto border border-danger border-2 opacity-50"/>
        </div>       

      </>      

    )
}