import React from 'react'
import Button from './Button'

const Sound:React.FC = () => {
  return (
    <div className="sounds">
    <div className="container">
        <div className="row">
            <div className="sounds-left-side col-12 col-md-6 py-md-5">
                <p>SOUNDS</p>
                <h3>A catalog so deep, it’s dangerous.</h3>
                <article>Expertly created and curated samples in any style <br/> imaginable. Start swimming in sound.
                </article>
                <Button nameOfButton = "Explore Sounds"/>
            </div>

            <div className="sounds-right-side col-12 col-md-6  py-md-5">
                <img src="/assets/images/soundspart/sound.svg" alt="" className="w-100 py-md-5"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sound