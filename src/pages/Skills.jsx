import '../assets/App.scss'

export default function Skills() {
    return (
        <div className="skills-comp container-fluid component-box">
            <h1 className='component-title'>My Skills</h1>
            <div className="col first-col">
                <div className="row justify-content-center">
                    <h5>Front-end Developer</h5>
                    <div className='row'>
                        <img className='skill-icon' src="../html5.svg"/>
                        <img className='skill-icon' src="../css.svg"/>
                        <img className='skill-icon' src="../sass.svg"/>
                        <img className='skill-icon' src="../bootstrap.svg"/>
                        <img className='skill-icon' src="../react.svg"/>
                        <img className='skill-icon' src="../js.svg"/>
                        <img className='skill-icon' src="../ts.svg"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <h5>Software Developer</h5>
                    <div className='row'>
                        <img className='skill-icon' src="../python.svg"/>
                        <img className='skill-icon' src="../java.svg"/>
                        <img className='skill-icon' src="../cpp.svg"/>
                        <img className='skill-icon' src="../mysql.svg"/>
                        <img className='skill-icon' src="../git.svg"/>
                        <img className='skill-icon' src="../algo.svg"/>
                        <img className='skill-icon' src="../cf.svg"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                </div>
            </div>
        </div>
    )
}