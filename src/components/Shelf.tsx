import { useState } from "react";

import Book from "./Book";
import shelf1 from "../shelf1.json";

import { FiEdit2 } from "react-icons/fi";

type ShelfType = {
    shelfTitle: string;
    openModal: () => void;
};

type ShelfDataType = {
    title: string;
    author: string;
    pages: number;
    genre: string;
};

const Shelf = ({ shelfTitle, openModal }: ShelfType) => {
    const [titleHovered, setTitleHovered] = useState(false);
    const [data, setData] = useState(shelf1.data);

    const whenTitleHovered = () => {
        setTitleHovered(true);
    };

    const whenTitleNotHovered = () => {
        setTitleHovered(false);
    };

    const trashClicked = (dataTitle: string) => {
        // return only the items that DONT match the inputted title
        setData(data.filter((item) => item.title != dataTitle));
    };

    return (
        <section>
            <div
                className="section-title"
                onMouseOver={whenTitleHovered}
                onMouseOut={whenTitleNotHovered}
            >
                {shelfTitle}
                {titleHovered && (
                    <FiEdit2 className="icon" onClick={openModal} />
                )}
            </div>
            <div id="books">
                {data.length > 0 ? (
                    data.map(({ title, author }: ShelfDataType, index) => (
                        <Book
                            key={title + index}
                            title={title}
                            author={author}
                            updateParent={trashClicked}
                        />
                    ))
                ) : (
                    <div>
                        No books in the shelf - add books by typing in the
                        search bar!
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shelf;
