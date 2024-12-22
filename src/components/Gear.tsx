import React from 'react'
import Button from './Button'

const Gear:React.FC = () => {
  return (
    <div className="gear">
        <div className="container">
            <div className="row">
                <div className="gear-left col-12 col-md-6  py-md-5 py-lg-1">
                    <p>Gear</p>
                    <h3>Build a drool-worthy studio,<br/> affordably.</h3>
                    <article>The industry’s top software, all in one place, on payment <br/>plans built to work for you.
                    </article>
                    <Button nameOfButton='Explore Gear'/>
                </div>

                <div className="gear-right col-12 col-md-6 py-md-5">
                    <img src="/assets/images/gear part/gear.svg" alt="" className="w-100"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gear