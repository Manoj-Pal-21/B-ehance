import React from 'react';
import "./Jobs.css"

function Jobs() {

    const tamplate = [
        {
            img: "../Images/Jobs1.png",
            name: "Voraco",
            location: "Pune, India",
            title: "Graphic Designer",
            detail: "Opportunity to work with Global Clients"
        },
        {
            img: "../Images/Jobs2.png",
            name: "Visual Designer",
            location: "Mumbai, India",
            title: "Coder",
            detail: "We're looking for a Graphic Designer with 2 to 3 years of experience."
        },
        {
            img: "../Images/Jobs3.png",
            name: "Copywriter",
            location: "Thane, India",
            title: "Image Editor",
            detail: "A visual designer for a full time role"
        },
        {
            img: "../Images/Jobs4.png",
            name: "Sugar Cubes",
            location: "Ulhasnagar, India",
            title: "Graphic Designer",
            detail: "ui ux"
        },
        {
            img: "../Images/Jobs5.png",
            name: "TeckSpark",
            location: "Pune, India",
            title: "Graphic Designer",
            detail: "We're looking for a Graphic Designer to join our team at Firebrand."
        },
        {
            img: "../Images/Jobs6.png",
            name: "Sociomark",
            location: "Navi Mumbai",
            title: "Graphic Animator",
            detail: "We are looking for Graphic Designer"
        },
        {
            img: "../Images/Jobs7.png",
            name: "knot just pictures",
            location: "Pune, India",
            title: "Photo editor",
            detail: "We are looking for Photo Editor"
        },
        {
            img: "../Images/Jobs8.png",
            name: "The Fluid Box",
            location: "Pune, India",
            title: "Visual Designer",
            detail: "A visual designer for a full time role in Mumbai"
        },
        {
            img: "../Images/Jobs9.png",
            name: "The Content Lab",
            location: "Pune, India",
            title: "Senior UI / UX",
            detail: "Graphic Designer | Illustrator"
        },
        {
            img: "../Images/Jobs10.png",
            name: "Studio Carbon",
            location: "Pune, India",
            title: "UI / UX Designer",
            detail: "End-to-end UI / UX design on diverse projects"
        },
        {
            img: "../Images/Jobs11.png",
            name: "Games24x7",
            location: "Pune, India",
            title: "Visual designer",
            detail: "We are looking for enthusiastic"
        },
        {
            img: "../Images/Jobs12.png",
            name: "Smart Systems",
            location: "Pune, India",
            title: "Backend designer",
            detail: "Website Frontend + Backend designer"
        }
    ]
    return (
        <div className="Job-container">
            <div className="J1-container">
                <div className="J1-header">
                    <h1>Creative Jobs</h1>
                    <h5>Discover your next career move, freelance gig, or internship
                    </h5>
                </div>

            </div>
            <div><h4 className="filter">All Jobs 12 Result Clear filters</h4></div>
            <div className="multi-card">
                {
                    tamplate.map((image, index) => {
                        return (

                            <div className="tamplate-container" key={index}>
                                <div className="img-loc">
                                    <img src={image.img} alt="" />
                                    <div>
                                        <h3>{image.name}</h3>
                                        {/* <i class="fas fa-map-marker-smile"></i> */}
                                        <p>{image.location}</p>
                                    </div>
                                </div>
                                <div className="detail">
                                    <h2>{image.title}</h2>
                                    <h5>{image.detail}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Jobs;
