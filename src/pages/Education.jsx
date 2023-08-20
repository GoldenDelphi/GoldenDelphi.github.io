import '../assets/App.scss'

export default function Education() {
    return (
        <div className="education-comp container-fluid component-box">
            <h1 className='component-title'>My Education</h1>
            <div className='row row-md-12  justify-content-center'>
                <div className='col-md-3 info'>
                    <div className='card'>
                        <img src="../vit1.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Senior, 2020-2024</h5>
                            <p className="card-text">B.Tech in CSE with Specialization in Information Security.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 achievements'>
                    <div className="card">
                        <div className="card-header">
                            <h4>My Achievements</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5><img src="../gpa.svg"/> GPA: 9.67/10 </h5>
                            </li>
                            <li className="list-group-item">
                                <h5><img src="../trophy.svg"/> Merit Award Holder</h5>
                            </li>
                            <li className="list-group-item">
                                <h5><img src="../medal.svg"/> Branch Topper</h5>
                            </li>
                            <li className="list-group-item">
                                <h5><img src="../award.svg"/> Programme Representative</h5>
                            </li>
                            <li className="list-group-item">
                                <h5><img src="../star.svg"/> College Student Ambassador</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}