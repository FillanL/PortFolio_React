import React from 'react'
import '../Scss/projects.scss'

function projects() {
    const dummyProjects = [{"name": "3 wade", "pic": "https://images.unsplash.com/photo-1568496696377-2809d794b942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name": "kobe", "pic":"https://images.unsplash.com/photo-1568312442641-d6c790fdf0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name":"ball","pic":"https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"}, {"name":"more stuff","pic":"https://images.unsplash.com/photo-1572219479068-8a05d5310ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name":"asfmn stuff","pic":"https://images.unsplash.com/photo-1570739193408-06ef09ded9dd?ixlib=rb-1.2.1"},{"name":"more asfa","pic":"https://images.unsplash.com/photo-1488926756850-a13b25e2f415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name":"more uff", "pic":"https://images.unsplash.com/photo-1547043848-d94c4ea5adc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"}]

    return (
        <div>
            <h2>
                Projects
            </h2>
            <div className="project-container">
                {dummyProjects.map(p => 
                    <div className="project-card" key={p.name}>
                        <img srcSet={p.pic} alt={`${p.name} pic`}/>
                        <h2>
                            {p.name}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}
export default projects