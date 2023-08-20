import '../assets/App.scss'

function Card({ title, description, link, btnText = "Check it out!"}) {
    return (
        <div className="card">
            {/* <div className="card-header"></div> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} className="btn btn-primary">{btnText}</a>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="projects-comp container-fluid component-box">
            <h1 className='component-title'>My Projects</h1>
            <div className="col justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <Card 
                        title = "My Personal Website"
                        description = "A sleek, minimalstic and responsive website built using ReactJS and Bootstrap to display my portfolio."
                        link = ""
                        btnText = "You're here!"
                        />
                    </div>
                    <div className="col-sm-3">
                        <Card
                        title = "Information Extraction and Retrieval from Medicinal Trials/Reports using NLP"
                        description = "A simple interface which helps extract and visualize important information like symptoms and drug dosages from unstructured clinical trials, using NLP, which can prove detrimental in life and death situations."
                        link = ""
                        />
                    </div>
                    <div className="col-sm-3">
                        <Card
                        title = "Improved K-Anonymity Algorithm for Data Privacy"
                        description = "Improved the scalability and effectiveness of the Mondrian algorithm using optimized clustering process for better k- anonymity in large datasets."
                        link = ""
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <Card
                        title = "Detecting bots on Social Media via comments"
                        description = "Developed a bot detection system for platform moderation, analysing comments for relevant features such as length, keyword frequency, and time of day using ML to classify comments as human or bot."
                        link = ""
                        />
                    </div>
                    <div className="col-sm-3">
                        <Card
                        title = "Three Level Authentication System"
                        description = "A secure 3-Level authentication system meant to combat inefficiencies of existing 2LA by made using Django and utilizing cryptographic algorithms."
                        link = ""
                        />
                    </div>
                    <div className="col-sm-3">
                        <Card
                        title = "Graphic CatCopter Game"
                        description = "A fun game made utilizing Java and Java-FX."
                        link = ""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}