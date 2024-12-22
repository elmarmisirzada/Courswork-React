import React from 'react'
import Button from './Button'

const Technology:React.FC = () => {
  return (
    <div className="tech">
    <div className="container">
        <div className="row">
            <div className="tech-left col-12 col-md-6 py-md-5">
                <img src="/assets/images/technology part/tech.svg" alt="" className="w-100"/>
            </div>

            <div className="tech-right col-12 col-md-6 py-md-5">
                <p>Technology</p>
                <h3>Crate dig without the dust.</h3>
                <article>Our intelligent search tools help you discover sounds you <br/> would normally have to dig
                    to find. Tech breaks the sweat, not <br/> you.</article>
                <Button nameOfButton='Discover CoSo'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Technology