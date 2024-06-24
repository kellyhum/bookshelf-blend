import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

type BookResultType = {
    // !!! remove duplication!
    author_name: string[];
    cover_i: number;
    title: string;
};

function Nav() {
    const [books, setBooks] = useState<BookResultType[]>([]); // !!! figure out why i need to explicitly specify the type

    return (
        <nav>
            <div id="search">
                <SearchBar setBooksFunc={setBooks} />
                <SearchResults books={books} />
            </div>
        </nav>
    );
}

export default Nav;
