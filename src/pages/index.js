import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Phantom"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div id="main">
          <div className="inner">
            <header>
              <h1>
                This is Phantom, a free, fully responsive site
                <br />
                template designed by <a href="http://html5up.net">HTML5 UP</a>.
              </h1>
              <p>
                Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
                sit amet nisi euismod sed cursus arcu elementum ipsum arcu
                vivamus quis venenatis orci lorem ipsum et magna feugiat
                veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
              </p>
            </header>
            <section className="tiles">
              <article className="style1">
                <span className="image">
                  <img src={pic01} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Magna</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style2">
                <span className="image">
                  <img src={pic02} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Lorem</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style3">
                <span className="image">
                  <img src={pic03} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Feugiat</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style4">
                <span className="image">
                  <img src={pic04} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Tempus</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style5">
                <span className="image">
                  <img src={pic05} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Aliquam</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style6">
                <span className="image">
                  <img src={pic06} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Veroeros</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style2">
                <span className="image">
                  <img src={pic07} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Ipsum</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style3">
                <span className="image">
                  <img src={pic08} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Dolor</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style1">
                <span className="image">
                  <img src={pic09} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Nullam</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style5">
                <span className="image">
                  <img src={pic10} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Ultricies</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style6">
                <span className="image">
                  <img src={pic11} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Dictum</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
              <article className="style4">
                <span className="image">
                  <img src={pic12} alt="" />
                </span>
                <Link to="/generic">
                  <h2>Pretium</h2>
                  <div className="content">
                    <p>
                      Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                      veroeros et feugiat.
                    </p>
                  </div>
                </Link>
              </article>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
