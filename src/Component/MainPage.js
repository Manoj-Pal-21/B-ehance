import React from 'react';
import './Navbar.css';

const MainPage = () => {

    const card = [
        {
            sname: "card1",
            imgsrc: "../images/Boat.png",
            title: "Fishermen of Tyre South Lebanon",
            author: "Rick Bajotnas"
        },
        {
            sname: "card2",
            imgsrc: "../images/Boat1.png",
            title: "New Yock New Yorkers",
            author: "Rick Bajotnas"
        },
        {
            sname: "card2",
            imgsrc: "../images/Boat2.png",
            title: "Ethiopian Streets",
            author: "Rick Bajotnas"
        },
        {
            sname: "card3",
            imgsrc: "../images/Boat3.png",
            title: "After The Coal Mine",
            author: "Rick Bajotnas"
        },
        {
            sname: "card4",
            imgsrc: "../images/Boat4.png",
            title: "Bananas",
            author: "Rick Bajotnas"
        },
        {
            sname: "card5",
            imgsrc: "../images/Boat5.png",
            title: "Brazil",
            author: "Rick Bajotnas"
        },
        {
            sname: "card6",
            imgsrc: "../images/Boat6.png",
            title: "Vietnam",
            author: "Jeffey Weiss"
        },
        {
            sname: "card7",
            imgsrc: "../images/Boat7.png",
            title: "Energy & Photography",
            author: "Kristoper Grunert"
        },
        {
            sname: "card8",
            imgsrc: "../images/Boat8.png",
            title: "Valture Culture",
            author: "Nope"
        }
    ];

    return (
        <div className="body-container">
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

export default MainPage;
