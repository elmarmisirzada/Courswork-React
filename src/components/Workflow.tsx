import React from 'react'

const Workflow:React.FC = () => {
  return (
    <div className="workflow">
    <div className="container">
        <div className="row">
            <div className="workflow-left col-12 col-md-6  py-md-5">
                <img src="/assets/images/workflow part/workflow.svg" alt="" className="w-100"/>
            </div>

            <div className="workflow-right col-12 col-md-6  py-md-5 ">
                <p>Connected Experience</p>
                <h3>A workflow that actually flows.</h3>
                <article>Preview samples in your track’s key and tempo, drag and <br/>drop sounds into your DAW, and
                    organize your favorite <br/> samples, MIDI and presets in one place.</article>
            </div>
        </div>
    </div>
</div>
  )
}

export default Workflow