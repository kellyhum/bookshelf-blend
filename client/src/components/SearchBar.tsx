import { useState } from "react";

type BookResultType = {
    // !!! remove duplication!
    author_name: string[];
    cover_i: number;
    title: string;
};

type SearchBarParamsType = {
    setBooksFunc: (a: BookResultType[]) => void;
};

function SearchBar({ setBooksFunc }: SearchBarParamsType) {
    const [userInput, setUserInput] = useState("");

    const changeOccured = (event: any) => {
        setUserInput(event.target.value);
        fetchData(event.target.value);
    };

    const fetchData = (query: string) => {
        fetch(`https://openlibrary.org/search.json?q=${query}`)
            .then((response) => response.json())
            .then((jsonResult) => {
                let displayedBookList: BookResultType[] = [];
                let slicedBooks: BookResultType[] = jsonResult.docs.slice(0, 5); // top 5 elements in a new array

                slicedBooks.forEach((book) => {
                    let { author_name, cover_i, title } = book; // extract the 3 desired information from the object
                    let restructuredBook: BookResultType = {
                        author_name,
                        cover_i,
                        title,
                    }; // store extracted info into a new variable // !!! understand this specific destructuring better
                    displayedBookList.push(restructuredBook);
                });
                setBooksFunc(displayedBookList);
                console.log(displayedBookList);
            });
    };

    return (
        <input
            type="text"
            placeholder="Search for books..."
            onChange={changeOccured}
        />
    );
}

export default SearchBar;
