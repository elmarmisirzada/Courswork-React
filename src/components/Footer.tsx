import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-up d-flex py-md-5">
                    <div className="alt-alta col-lg-2 col-12 col-md-4 d-flex flex-column">
                        <h5>Skills</h5>
                        <nav>
                            <a href="" className="first-link">Features</a>
                            <a href="">Catalog</a>
                        </nav>
                        <h5 className="studio">Studio</h5>
                        <nav>
                            <a href="" className="first-link">Features</a>
                            <a href="">About Splice Studio</a>
                            <a href="">Managing Your Production <br/>Libr/ary</a>
                            <a href="">Collaborating with Baewatch</a>
                        </nav>


                    </div>

                    <div className="community col-lg-2 col-12 col-md-4 d-flex flex-column">
                        <h5>Community</h5>
                        <nav>
                            <a href="" className="first-link">Ableton Live Projects</a>
                            <a href="">FL Studio Projects</a>
                            <a href="">Logic Pro X Projects</a>
                            <a href="">Garageband Projects</a>
                            <a href="">Remix Contests</a>
                            <a href="">Tiesto's Secrets</a>
                        </nav>


                    </div>

                    <div className="footer-sounds col-lg-2 col-12 col-md-4 d-flex flex-column">
                        <h5>Sounds</h5>
                        <nav>
                            <a href="" className="first-link">Features</a>
                            <a href="">Catalog</a>
                            <a href="">How Jauz Uses Sounds</a>
                            <a href="">deadmau5's Chimaera </a>
                            <a href="">KSHMR Vol. 2</a>
                        </nav>

                    </div>

                    <div className="plugins col-lg-2 col-12 col-md-4 d-flex flex-column">
                        <h5>Plugins</h5>
                        <nav>
                            <a href="" className="first-link">Top VSTs</a>
                            <a href="">Serum</a>
                            <a href="">Rent to Own</a>
                            <a href="">Free Plugins</a>
                            <a href="">Top Manufacturers</a>
                        </nav>
                    </div>

                    <div className="beatmaker col-lg-2 col-12 col-md-4 d-flex flex-column">
                        <h5>Beatmaker</h5>
                        <nav>
                            <a href="" className="first-link">Create Your Own Beat</a>
                            <a href="">Wakapella</a>
                            <a href="">Just Blaze</a>
                        </nav>
                    </div>

                    <div className="blog col-lg-2 col-12 col-md-4 d-flex flex-column">
                        <h5>Blog</h5>
                        <nav>
                            <a href="" className="first-link">Latest Posts</a>
                            <a href="">Using Soundtoys Decapitator</a>
                            <a href="">Mastering 101</a>
                            <a href="">Producing Future Beats</a>
                            <a href="">Belonging @ Splice</a>
                        </nav>

                    </div>


                </div>


                <div className="footer-down d-flex align-items-center">
                    <div className="second-down d-flex flex-column flex-lg-row align-items-lg-center">
                        <p>© 2022 Splice.com All Rights Reserved</p>
                        <nav>
                            <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Jobs</a>
                            <a href="">Contact</a>
                            <a href="">Help</a>
                        </nav>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="./assets/images/footer/fb.svg" alt="Facebook"/>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Footer