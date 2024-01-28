export default function Header () {

    return (

        <div className ="container-fluid text-center navigation">
            <nav className  ="navbar navbar-expand-md navbar-light bg-light  ">
  <div className  ="container-fluid">
    <a className  ="navbar-brand text-primary " href="#"> @ M Nawaz Khan</a>
    <button className  ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className  ="navbar-toggler-icon"></span>
    </button>
    <div className  ="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className  ="navbar-nav">
        <a className  ="nav-link active text-dark ms-3" aria-current="page" href="#">Home</a>
        <a className  ="nav-link text-dark ms-3" href="#">Features</a>
        <a className  ="nav-link text-dark ms-3" href="#">Pricing</a>
       
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}