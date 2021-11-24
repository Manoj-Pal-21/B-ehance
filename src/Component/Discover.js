import React from 'react';
import "./Discover.css";

const Discover = () => {

    const card = [
        {
            sname: "card1",
            imgsrc: "../Images/Boat9.png",
            title: "Fishermen of Tyre South Lebanon",
            author: "Rick Bajotnas"
        },
        {
            sname: "card2",
            imgsrc: "../Images/Boat10.png",
            title: "New Yock New Yorkers",
            author: "Rick Bajotnas"
        },
        {
            sname: "card2",
            imgsrc: "../Images/Boat11.png",
            title: "Ethiopian Streets",
            author: "Rick Bajotnas"
        },
        {
            sname: "card3",
            imgsrc: "../Images/Boat12.png",
            title: "After The Coal Mine",
            author: "Rick Bajotnas"
        },
        {
            sname: "card4",
            imgsrc: "../Images/Boat13.png",
            title: "Bananas",
            author: "Rick Bajotnas"
        },
        {
            sname: "card5",
            imgsrc: "../Images/Boat14.png",
            title: "Brazil",
            author: "Rick Bajotnas"
        },
        {
            sname: "card6",
            imgsrc: "../Images/Boat15.png",
            title: "Vietnam",
            author: "Jeffey Weiss"
        },
        {
            sname: "card7",
            imgsrc: "../Images/Boat16.png",
            title: "Energy & Photography",
            author: "Kristoper Grunert"
        },
        {
            sname: "card8",
            imgsrc: "../Images/Boat17.png",
            title: "Valture Culture",
            author: "Nope"
        }
    ];

    return (
        <div className="box-container">
            <div className="D-container">
                <div className="app-header">
                    <h1>Best of Behance</h1>
                    <h5>Project features today by our curators</h5>
                </div>
            </div>
            {
                card.map((image, index) => {
                    return (
                        <div className="card-container">
                            <img src={image.imgsrc} alt="" />
                            <h3>{image.title}</h3>
                            <p>{image.author}</p>
                            <button className="saveBtn">
                                <i class="fas fa-folder"></i>
                                <span> Save</span>
                            </button>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Discover;
