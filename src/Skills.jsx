import './Styles.scss'

function Skills() {
    const iconfp = 'static/Icons/'
    return (
        <div className='skills container-fluid'>
            <h1 className='display-1 caveat white'>My <span className='yellow'>Skills</span></h1>
            <div className='container-fluid'>
                <div className='row justify-content-md-center text-center'>
                    <div className='col-12 col-md-6'>
                    <img className='skill-icon' src={iconfp + "python.svg"}/>
                        <img className='skill-icon' src={iconfp + "java.svg"}/>
                        <img className='skill-icon' src={iconfp + "cpp.svg"}/>
                        <img className='skill-icon' src={iconfp + "mysql.svg"}/>
                        <img className='skill-icon' src={iconfp + "react.svg"}/>
                        <img className='skill-icon' src={iconfp + "js.svg"}/>
                        <img className='skill-icon' src={iconfp + "ts.svg"}/>
                        <img className='skill-icon' src={iconfp + "html5.svg"}/>
                        <img className='skill-icon' src={iconfp + "sass.svg"}/>
                        <img className='skill-icon' src={iconfp + "bootstrap.svg"}/>
                        <img className='skill-icon' src={iconfp + "css.svg"}/>
                        <img className='skill-icon' src={iconfp + "git.svg"}/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Skills