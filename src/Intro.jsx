import './Styles.scss'

function Intro() {
    return (
        <div className='intro'>
            <div className='row'>
                <div className='col-12 col-md-8 box-1'>
                    <div id='intro-text'>
                        <h1 className='display-1 white caveat'>
                            <div className='intro-anim-1 text-start'>
                                Hi!
                            </div>
                            <div className='intro-anim-2'>
                                I'm 
                                <span className='pink'>&nbsp;Divyanshi</span>
                            </div>
                        </h1>
                        <h3 className='display-5 muted-white intro-anim-3'>Software Engineering Intern</h3>

                        {/* <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus feugiat velit, vel ullamcorper risus tincidunt quis</h3> */}
                    </div>
                </div>
                <div className='col-12 col-md-4 box-2 text-center'>
                    <div className='intro-img-div'>
                        <img src="static/menobg.png" className='intro-img img-fluid' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Intro