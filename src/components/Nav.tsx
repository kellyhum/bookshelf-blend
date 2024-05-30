import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import { MdOutlineModeNight } from "react-icons/md";

type BookResultType = {
    // !!! remove duplication!
    author_name: string[];
    cover_i: number;
    title: string;
};

function Nav() {
    const [books, setBooks] = useState<BookResultType[]>([]); // !!! figure out why i need to explicitly specify the type
    const [darkModeOn, setDarkModeOn] = useState(false);

    const setDarkMode = () => {
        let bodyElement = document.querySelector("body"); // refactor this

        if (darkModeOn) {
            (bodyElement as HTMLElement).dataset.theme = "light";
            setDarkModeOn(false);
        } else {
            (bodyElement as HTMLElement).dataset.theme = "dark";
            setDarkModeOn(true);
        }
    };

    return (
        <nav>
            <img src="../src/assets/spotify.png" id="logo" />
            <div id="search">
                <SearchBar setBooksFunc={setBooks} />
                <SearchResults books={books} />
            </div>
            <div id="dark-mode-toggle" onClick={setDarkMode}>
                <MdOutlineModeNight className="icon" size={20} />
            </div>
        </nav>
    );
}

export default Nav;
