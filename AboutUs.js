import Hero from './Hero';



const AboutView = () => {
    return(
      <>
      <Hero text =" About us"/>
      <div className = "container">
          <div className = "row">
            <div className = "col-lg-8 offset-lg-2 my-5">
              <p className ="lead">
                Hellooooo everyone!!!! Welcome to my Website.
                I'm developing new skills and this time I affirm to be consistent with my work.
              </p>
            </div>
          </div>
        </div>
      {/* <h2>About us</h2> */}
      </>
      
    )
  }
  export default AboutView;