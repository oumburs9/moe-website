import React from "react";
import Titles from "./title.component";
import Card from "./news-card.component";
import { Link } from "react-router-dom";

const Services = () => {
    const imageData = [
        {
            id: 1,
            image: "https://learn-english.moe.gov.et/storage/supplementary%20thumbnail/13.png",
            title: "Learn English",
            paragraph:
                "Natus necessitatibus ducimus quibusdam ea nihil ab earum culpa reprehenderit cumque doloremque. Numquam officia repellat nisi repellendus, magni reiciendis mollitia adipisci quibusdam.",
            link: "https://learn-english.moe.gov.et",
        },
        {
            id: 1,
            image: "https://learn-english.moe.gov.et/storage/supplementary%20thumbnail/21.png",
            title: "Nerd",
            paragraph:
                "Natus necessitatibus ducimus quibusdam ea nihil ab earum culpa reprehenderit cumque doloremque. Numquam officia repellat nisi repellendus, magni reiciendis mollitia adipisci quibusdam.",
            link: "https://learn-english.moe.gov.et",
        },
        {
            id: 1,
            image: "https://learn-english.moe.gov.et/storage/supplementary%20thumbnail/21.png",
            title: "Other Services",
            paragraph:
                "Natus necessitatibus ducimus quibusdam ea nihil ab earum culpa reprehenderit cumque doloremque. Numquam officia repellat nisi repellendus, magni reiciendis mollitia adipisci quibusdam.",
            link: "https://learn-english.moe.gov.et",
        },
    ];

    const jsonData2 = {
        title: "Services",
        subtitle: "This is a sample subtitle.",
    };

    return (
        <>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
                <Titles title={jsonData2.title} subtitle={jsonData2.subtitle} />

                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 gap-x-16 gap-y-12 mb-10 sm:max-w-full sm:grid-cols-1 lg:grid-cols-3">
                    {imageData.map((jsonData, index) =>
                        index <= 2 ? <Card data={jsonData} /> : ""
                    )}
                </div>
            </div>
        </>
    );
};

export default Services;
