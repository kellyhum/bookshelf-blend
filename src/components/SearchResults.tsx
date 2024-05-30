type BookResultType = {
    // !!! remove duplication!
    author_name: string[];
    cover_i: number;
    title: string;
};

type SearchResultsType = {
    books: BookResultType[];
};

function SearchResults({ books }: SearchResultsType) {
    return (
        <div id="search-results">
            {books.map((book) => (
                <div className="result">{book.title}</div>
            ))}
        </div>
    );
}

export default SearchResults;
