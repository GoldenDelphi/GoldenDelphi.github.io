import './Styles.scss'

function Timeline() {
    return (
        <div className="fluid-container py-5">
            <div className="main-timeline">
                <div className="timeline left">
                    <div className="card">
                        <img src="src/assets/me-google1.jpeg" className="card-img-top"/>
                        <div className="card-body p-4">
                            <h4>Google: SWE Intern</h4>
                            <p className="text-muted"><i className="bi-calendar-month"></i> May 2023 - July 2023</p>
                            <p className="mb-0">Worked under the Workspace Security Team at Google Cloud, on a pivotal front-end based project focused on enhancing the Security Investigation Tool by implementing vital features that were in high demand by our valued customers.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline right">
                    <div className="card">
                        <img src="src/assets/me-google2.jpeg" className="card-img-top"/>
                        <div className="card-body p-4">
                            <h4>Google: STEP Intern</h4>
                            <p className="text-muted"><i className="bi-calendar-month"></i> May 2022 - August 2022</p>
                            <p className="mb-0">Worked under the Formats Team at Google Ads, on the back-end of a project which aimed at creating a tool/platform to support faster prototyping and experimentation of new Ad Formats/Ad Extensions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline