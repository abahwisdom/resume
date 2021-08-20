import './App.css';
import logo from "./zuri.jpeg"
function App() {


  function handleSubmit(event){
    event.preventDefault();
    // alert('yes');
    
    const update = {
      email: event.target[0].value,
      subject: event.target[1].value,
      message: event.target[2].value
      };

    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
      };

    fetch('/api/contact', options)
    .then(() => {
      alert('Email submitted')
  })
    }

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="full-name">
            <span className="first-name">Wisdom</span> 
            <span className="last-name">Abah</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">abahwisdom@gmail.com</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">(234)111-222-3333</span>
          </div>
          
          <div className="about">
            <span className="position">Web Developer </span>
            <span className="desc">
            I'm a software developer based in Nigeria currently specializing in building modern efficient websites with performant experience. I place value on speed, function and aesthetics and aim to provide distinctive experiences all-round. 
            </span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Lendanarm</div>
                  <div className="addr">Ibadan</div>
                  {/* <div className="duration">Jan 2011 - Feb 2015</div> */}
                </div>
                <div className="right">
                  <div className="name">Frontend Developer</div>
                  {/* <div className="desc">Ibadan</div> */}
                </div>
              </div>
                      <div className="section__list-item">
                <div className="left">
                  <div className="name">HealthBiotics</div>
                  <div className="addr">Ibadan</div>
                  {/* <div className="duration">Jan 2011 - Feb 2015</div> */}
                </div>
                <div className="right">
                  <div className="name">Fullstack developer</div>
                  {/* <div className="desc">did This and that</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">University of Ibadan</div>
                  <div className="addr">Ibadan</div>
                  <div className="duration">2015 - 2021</div>
                </div>
                <div className="right">
                  <div className="name">Medicine and Surgery </div>
                  {/* <div className="desc">did This and that</div> */}
                </div>
              </div>
              {/* <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div> */}

            </div>
            
        </div>
          <div className="section">
            <div className="section__title">Projects</div> 
            <div className="section__list">
              <div className="section__list-item">
                <div className="name">Blacklife</div>
                <div className="text">A fullstack e-commerce web app equipped. Browse through black fashion collections and place an order. Also equiped with admin route behind authentication protection for adding and editing of products and collections.</div>
                <a style={{color:'#79a9ce'}} href="https://blacklife.herokuapp.com/">Check it out</a>
              </div>
              
              <div className="section__list-item">
                <div className="name">SoulMates</div>
                <div className="text">A client-side rendered dating site. Create Account, sign in, create profile and explore other users's profiles. Also equipped with chat functionality for users that have liked each other's profiles. 
                </div>
                <a style={{color:'#79a9ce'}} href="https://soulmates.netlify.app/">Check it out</a>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
            <div className="skills__item">
                <div className="left"><div className="name">
                  HTML</div></div>
                <div className="right">
                                <input  id="ck1" type="checkbox" checked/>

                  <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                              <input id="ck3" type="checkbox" checked/>

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                  <label for="ck4"></label>
                                <input id="ck5" type="checkbox" checked/>
                    <label for="ck5"></label>

                </div>
                
              </div>
              <div className="skills__item">
                <div className="left"><div className="name">
                  Javascript
                  </div></div>
                <div className="right">
                                <input  id="ck1" type="checkbox" checked/>

                  <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                              <input id="ck3" type="checkbox" checked/>

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                  <label for="ck4"></label>
                                <input id="ck5" type="checkbox" checked/>
                    <label for="ck5"></label>

                </div>
              </div>
              
            </div>
            <div className="skills__item">
                <div className="left"><div className="name">
                  CSS</div></div>
                <div className="right">
                                <input  id="ck1" type="checkbox" checked/>

                  <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                              <input id="ck3" type="checkbox" checked/>

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                  <label for="ck4"></label>
                                <input id="ck5" type="checkbox" checked/>
                    <label for="ck5"></label>

                </div>
                
              </div>
              <div className="skills__item">
                <div className="left"><div className="name">
                  React</div></div>
                <div className="right">
                                <input  id="ck1" type="checkbox" checked/>

                  <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                              <input id="ck3" type="checkbox" checked/>

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                  <label for="ck4"></label>
                                <input id="ck5" type="checkbox" checked/>
                    <label for="ck5"></label>

                </div>
                
              </div>              
              
            </div>
          <div className="section">
          <div className="section__title">
            Interests
            </div>
            <div className="section__list">
              <div className="section__list-item">
                        Art, programming.
                </div>
            </div>
          </div>
          <div className="section">
          <div className="section__title">
            Contact Me
          </div>
          <div className='form-box'>
            <form onSubmit={handleSubmit} >
              <label for="email">Your Email</label>
              <input type="text" id="email" name="email" placeholder="Your Email.."/>

              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject.."/>

              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Type your message here"/>
            
              <input type="submit" value="Submit"/>
            </form>
            </div>
          </div>
          <div className="section" style={{textAlign: 'center'}} >
          <a href="https://internship.zuri.team/">
            <img src={logo}/>
          </a>
          </div>
          </div>
          
        </div>
      </div>
  );
}

export default App
