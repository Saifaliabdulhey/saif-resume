import React from 'react'
import Footer from './Footer';
import projects from '../images/projects.png'
import itepcode from '../images/itepcode.jpg'

function Projects() {
  return (
    <div className="project-container">
      <div className="container">
        <div className="content-container">
          <div className="project-content">
            <div className="projects-img">
              <img className="project-img" src={projects} alt="Project" />
            </div>
            <div className="project-title">
              <h1>THE PROJECTS I'VE DONE SO FAR!</h1>
              <p>This projects i built them in my journy to learn Coding and
                There are more projects available I've built for clints freelancing.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul class="cards">
          <li>
            <a href="https://www.naruto.center/index.php" class="card">
              <img src="https://www.naruto.center/assets/uploads/logo.png" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://www.naruto.center/assets/uploads/logo.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Naruto Center Website</h3>
                    <span class="card__status">Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.copcart.website/index.php" class="card">
              <img src="https://www.expressandstar.com/resizer/5OW4gIbt_SDki0JPxo0oaam4cEI=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/IKOPWTNDKJF4XJ3W5PKJYSGBXQ.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://www.copcart.website/assets/uploads/logo.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Copcart.website</h3>
                    <span class="card__status">Developed By Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">This website developed by Saifaliabdulhey87 for Naruto Center in 2022</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://saifaliabdulhey.github.io/EPcode/responsive-pricing-card-main/index.html" class="card">
              <img src={itepcode} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src={itepcode} alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">EPcode</h3>
                    <span class="card__tagline"></span>
                    <span class="card__status">Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">It EPcode website to order a website for your company</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="card">
              <img src="https://saifaliabdulhey.github.io/yassen/static/media/logo.de77b58e150685008081.png" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://saifaliabdulhey.github.io/yassen/static/media/logo.de77b58e150685008081.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">car website</h3>
                    <span class="card__status">Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Car Website for my client Using React JS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://saifaliabdulhey.github.io/editor/script.html" class="card">
              <img src="https://saifaliabdulhey.github.io/editor/photo.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://saifaliabdulhey.github.io/editor/photo.jpg" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Expensify App</h3>
                    <span class="card__status">Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Expensify App Using React JS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://react-deploy-test-appp.herokuapp.com/home" class="card">
              <img src="https://assets.website-files.com/5e723e8d49ce3144268de3e7/5ea1de1a2fca7b663227560a_Expensify.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://play-lh.googleusercontent.com/VitIPi1Lj4gg-RnAdWfFFycTMBlGg2GhSqnKxiQUTgTLOfna3L50EnP9YJj08N0fXC0" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Expensify App</h3>
                    <span class="card__status">Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Expensify App Using JS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://saifaliabdulhey.github.io/lastchance/player.html" class="card">
              <img src="https://saifaliabdulhey.github.io/lastchance/image/logo.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://saifaliabdulhey.github.io/lastchance/image/logo.jpg" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Music App</h3>
                    <span class="card__status">Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Music App Using JS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://saifaliabdulhey.github.io/protfolio-edited/index.html" class="card">
              <img src="https://saifaliabdulhey.github.io/protfolio-edited/assets/home.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://saifaliabdulhey.github.io/protfolio-edited/assets/home.jpg" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Music App</h3>
                    <span class="card__status">Protfolio by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Music App Using JS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://saifaliabdulhey.github.io/moon/index.html" class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Music App</h3>
                    <span class="card__status">Moon Animation by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Animation App Using JS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://saifaliabdulhey.github.io/Blog" class="card">
              <img src="https://i.ytimg.com/vi/crzR4JucSBM/maxresdefault.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Blog_%281%29.jpg" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Blog App</h3>
                    <span class="card__status">Blog App Developed by Saifaliabdulhey87</span>
                  </div>
                </div>
                <p class="card__description">Blog App Using React</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="project-body">
      </div>
      <Footer />
    </div>

  )
}

export default Projects