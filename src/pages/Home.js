import rodoImage from '../media/Rodo.jpg';

const Home = () => {
  return (
    <div>
      {/* content block 1: Quick Introduction */}
      
      <section>
        <div class="row">
          <div class="column">
            <img src={rodoImage} width="416" height="553" alt="Rodo Picture" />
          </div>
          <div class="column">
            <div className='vertical-center'>
            <p>
              <h2>Hello World!</h2>
              I’m a motivated gonna-be Software Engineer wanting to build tools that improve
              human lives and solve impactful problems. I have participated in
              multiple projects that involves building deep learning models, software
              development, data analysis and so on. 
            </p>
            <p>
              With the accumulated strong and diverse skill-set, I’m excited to take on new challenges!
            </p>
            </div>
          </div>
        </div> 
      </section>

      {/* content block 2: Projects */}
      <div className='background-color-2'>
        <section className='background-color-2'>
            diff color section
        </section>

      </div>
    </div>
  );
};

export default Home;
