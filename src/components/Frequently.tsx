import React from 'react'
import AccardionCompanent from './Accardion'

const Frequently:React.FC = () => {
  return (
   <div className='accordion'>
     <div className="container">
        <div className='asked'>
            <h2 className='faq'>FAQ</h2>
            <h4 className='questions'>Frequetly Asked Questions</h4>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <AccardionCompanent/>
            </div>

            <div className="col-12 col-md-6">
            <AccardionCompanent/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Frequently