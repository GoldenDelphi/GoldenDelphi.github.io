import '../assets/App.scss'
import '../assets/Timeline.scss'

function Timeline() {
    return (
        <div className="timeline-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <div className="timeline">
                            <span className="icon fa fa-globe">
                                <img src="../google.svg" />
                            </span>

                            <div className="timeline-content gentle-shake">
                                <h3>SWE Intern</h3>
                                <p>May 2023 - July 2023</p>
                                <h5>Google</h5>

                                <p>
                                    Worked under the Workspace Security Team at Google Cloud, on a pivotal front-end based project focused on enhancing the Security Investigation Tool by implementing vital features that were in high demand by our valued customers.
                                </p>
                            </div>

                        </div>
                        <div className="timeline">
                            <span className="icon fa fa-rocket">
                                <img src="../google.svg" />
                            </span>

                            <div className="timeline-content gentle-shake">
                                <h3>STEP Intern</h3>
                                <p>May 2022 - August 2022</p>
                                <h5>Google</h5>
                                <p>
                                    Worked under the Formats Team at Google Ads, on a back-end based project which aimed at creating a tool/platform to support faster prototyping and experimentation of new Ad Formats/Ad Extensions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <div className="experience-comp container-fluid component-box">
            <h1 className='component-title'>My Experience</h1>
            <Timeline />
        </div>
    )
}