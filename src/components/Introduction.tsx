import React from 'react'
import Button from './Button'

const Introduction:React.FC = () => {
  return (
    <div className="introduction">
    <div className="container">
        <div className="row">
            <div className="intro-left-side">
                <h2>Step into the <br/>producer's <br/> playground</h2>
                <article className="explore">Explore the world’s best sample library and an <br/>unmatched marketplace of
                    plugins and DAWs</article>
                <Button nameOfButton = "Try Free"/>
                <article className="learn">Learn more</article>
                <img src="/assets/images/introduction/arrow.svg" alt=""/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Introduction