function Education() {
    return (
        <div className="education container-fluid">
            <h1 className="display-1 caveat white">My <span className='green'>Education</span></h1>
            <div className="row justify-content-center">
                <div className="col col-3 col-img">
                    <img className='edu-img img-fluid' src='static/Icons/vit1.png' />
                </div>
                <div className="col col-5 col-body white">
                    <div className="row row-tile">
                        <p className="fs-5 mb-0"><img src="static/Icons/gpa.svg"/> GPA: 9.67</p>
                    </div>
                    <div className="row row-tile">
                        <p className="fs-5 mb-0"><img src="static/Icons/trophy.svg"/> Merit Award Holder</p>
                    </div>
                    <div className="row row-tile">
                        <p className="fs-5 mb-0"><img src="static/Icons/medal.svg"/> Branch Topper</p>
                    </div>
                    <div className="row row-tile">
                        <p className="fs-5 mb-0"><img src="static/Icons/award.svg"/> Programme Representative</p>
                    </div>
                    <div className="row row-tile">
                        <p className="fs-5 mb-0"><img src="static/Icons/star.svg"/> College Student Ambassador</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education