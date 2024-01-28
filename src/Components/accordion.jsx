import test4 from '/public/test4.jpeg'
import test3 from '/public/test3.png'
import test2 from '/public/test2.webp'
import test1 from '/public/test1.jpeg'
export default function Accordion(){

    return(
        <>
        <h2 className="text-danger text-center">Our Happy Clients</h2>
         <div id="carouselExampleAutoplaying" className="carousel slide my-5" data-bs-ride="carousel">
  <div className ="carousel-inner">
    <div className ="carousel-item active">
      <img src={test4} className="d-block w-25 mx-auto img-thumbnail radius-50 rounded" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img className="d-block w-25 mx-auto" src={test3} alt="html css"/>
    </div>
    <div className ="carousel-item">
      <img  src={test2}  className="d-block w-25 mx-auto" alt="..." />
    </div>
    <div className ="carousel-item">
      <img  src={test1}  className="d-block w-25 mx-auto" alt="..." />
    </div>
  </div>
  <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Previous</span>
  </button>
  <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
  <hr className ="mt-5 w-75 mx-auto border border-danger border-2 opacity-50"/>
</div>




        </>
    )
}