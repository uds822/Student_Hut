import img1 from "./images/img2.png";
const Home=()=> {
  return (
   <>
  <section id="header" ClassName="d-flex justify-content-center align-items-center">
  <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
      <div className="row">
       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

        <h1>
        Rent your hostles at 
        <strong className="brand-name">  StudentHut</strong></h1>
        <h2 className="my-3">
          We are the leading platform for hostles renting.
        </h2>
        <div className="mt-3">
          <a href="" className="btn-get-started">
            Getstarted;
          </a>
        </div>
       </div>
       <div className="col-lg-6 order-lg-1 order-lg-2 header-img ">
        <img src={img1} className="img-fluid animate" alt="home-img"/>
       </div>
    </div>
    </div>
    </div>
   </div>
  </section>
   </>
  );
}

export default Home;
