class Project {
    constructor(projectName, projectDescription, projectURL, projectImg = "https://images.unsplash.com/photo-1568312442641-d6c790fdf0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9") {
        this.name = projectName
        this.description = projectDescription
        this.img = projectImg
        this.url = projectURL
    }
}

export const ProjectList = [
    new Project("Which Way", "vanilla javascript memory game that uses asci values to validate correctness", "https://sad-kepler-8da893.netlify.app"),
    new Project("Lemede", "react JS crowdfunding platform that allows used to…w project creators to give credit to contributors", "https://vigorous-perlman-0de120.netlify.app/"),
    new Project("Blogz", "simple blog flatform that allows users to blog", "https://brave-shirley-4599a6.netlify.app/"),
    new Project("Minimal Logic", "Personal blog, using material ui and customer css to document coding tutorials and progress", "https://dazzling-villani-02b27c.netlify.app/"),
    new Project("Dating app", "full stack ruby on rails dating app, using bycrpt,Authorization and authentication", "#"),
    new Project("Tech Blog", "full stack react and node js appplication, using all custom css grind layout", "https://thirsty-gates-c0ec8f.netlify.app/")]
