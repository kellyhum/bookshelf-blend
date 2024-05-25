import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Shelf from "./components/Shelf";
import TitleModal from "./components/TitleModal";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setMessage(data.message));
    }, []);

    const [titleModalOpen, setTitleModalOpen] = useState(false);
    const [titleModalForm, setTitleModalForm] = useState("");

    const toggleModalOpen = () => {
        let modal = document.querySelector(".modal"); // bad practice to be directly manipulating dom?

        if (titleModalOpen) {
            setTitleModalOpen(false);
            (modal as HTMLDialogElement).close();
        } else {
            setTitleModalOpen(true);
            (modal as HTMLDialogElement).showModal();
        }
    };

    return (
        <>
            <TitleModal
                setTitle={setTitleModalForm}
                closeModal={toggleModalOpen}
            />
            <Nav />
            <Shelf
                shelfTitle={
                    titleModalForm.length > 0
                        ? titleModalForm
                        : "Default Bookshelf"
                }
                openModal={toggleModalOpen}
            />
            <Shelf
                shelfTitle={
                    titleModalForm.length > 0
                        ? titleModalForm
                        : "Default Bookshelf"
                }
                openModal={toggleModalOpen}
            />
            <button id="blend">Blend it :)</button>
            <div>{message}</div>
        </>
    );
}

export default App;
