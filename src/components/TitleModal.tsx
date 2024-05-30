import { useState } from "react";
import { IoClose } from "react-icons/io5";

type TitleModalType = {
    setTitle: (a: string) => void;
    closeModal: () => void;
};

const TitleModal = ({ setTitle, closeModal }: TitleModalType) => {
    const [shelfTitle, setShelfTitle] = useState("");

    function handleChange(event: any) {
        setShelfTitle(event.target.value);
    }

    function returnNewShelfTitle(event: any) {
        event.preventDefault();
        setTitle(shelfTitle);
        console.log(`shelf title is: ${shelfTitle}`);
        (document.querySelector(".modal") as HTMLDialogElement).close();
    }

    return (
        <dialog className="modal">
            <div className="modal-heading-container">
                <div className="modal-title">Edit title</div>
                <IoClose className="icon" onClick={closeModal} />
            </div>

            <form onSubmit={returnNewShelfTitle}>
                <input
                    type="text"
                    id="modal-input"
                    name="modal-input"
                    placeholder="Add a title..."
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </dialog>
    );
};

export default TitleModal;
