import Hero from './Hero';

const Home = () => {
    return (
      <>
      <Hero text= "Welcome to React 201"/>
        {/* <h1> Hello World from React 201</h1> */}
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
        </>
    )
  }

  export default Home;