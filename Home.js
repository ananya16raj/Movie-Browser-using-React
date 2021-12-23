import Hero from './Hero';

const Home = () => {
    return (
      <>
      <Hero text= "Welcome to Movie Mania"/>
       
        <div className = "container">
          <div className = "row">
            <div className = "col-lg-8 offset-lg-2 my-5">
              <p className ="lead">
                Hellooooo Binge-Watchers!!!! Glad you landed here, now grab a bucket loaded with Popcorns, buckle yourself up and GET SET GO!!!!
              </p>
            </div>
          </div>
        </div>
        </>
    )
  }

  export default Home;
