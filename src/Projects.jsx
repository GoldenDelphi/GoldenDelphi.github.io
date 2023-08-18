function Card({title, text}) {
    return (
        <div class="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

function Projects() {
    const projects = [
        {title: "Information Extraction and Retrieval from Medicinal Trials/Reports using NLP", text: "A simple interface which helps extract and visualize important information like symptoms and drug dosages from unstructured clinical trials, using NLP, which can prove detrimental in life and death situations."},
        {title: "Three Level Authentication System", text: "A secure 3-Level authentication system meant to combat inefficiencies of existing 2LA by made using Django and utilizing cryptographic algorithms."},
        {title: "Detecting bots on Social Media via comments", text: "Developed a bot detection system for platform moderation, analysing comments for relevant features such as length, keyword frequency, and time of day using ML to classify comments as human or bot."},
        {title: "Improved K-Anonymity Algorithm for Data Privacy", text: "Improved the scalability and effectiveness of the Mondrian algorithm using optimized clustering process for better k- anonymity in large datasets."},
        {title: "Graphic CatCopter Game", text: "A fun game made utilizing Java and Java-FX."},
    ]
    return (
        <div className="projects container-fluid">
            <h1 className="display-1 caveat white">My <span className='pink'>Projects</span></h1>
            <div className="col card-deck">
                <div className="row justify-content-center">
                    <div className="col-3 mb-4 col-pad">
                        <Card title={projects[0].title} text={projects[0].text}/>
                    </div>

                    <div className="col-3 mb-4 col-pad">
                        <Card title={projects[1].title} text={projects[1].text}/>
                    </div>

                    <div className="col-3 mb-4 col-pad">
                        <Card title={projects[2].title} text={projects[2].text}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3 mb-4 col-pad">
                        <Card title={projects[3].title} text={projects[3].text}/>
                    </div>

                    <div className="col-3 mb-4 col-pad">
                        <Card title={projects[4].title} text={projects[4].text}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects