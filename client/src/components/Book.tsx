import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";

type Book = {
    title: string;
    author: string;
    updateParent: (a: string) => void; // double check return type
};

const Book = ({ title, author, updateParent }: Book) => {
    const [bookHovered, setBookHovered] = useState(false);

    const isHovered = () => {
        setBookHovered(true);
    };

    const notHovered = () => {
        setBookHovered(false);
    };

    return (
        <div className="book" onMouseOver={isHovered} onMouseOut={notHovered}>
            <img src="../src/assets/test.jpg" />
            <p>{title}</p>
            <p className="book-author">{author}</p>
            {bookHovered && (
                <LuTrash2
                    className="icon trash"
                    size={20}
                    onClick={() => updateParent(title)}
                />
            )}
        </div>
    );
};

export default Book;
