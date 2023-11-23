import '../index.css';

interface Props {
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ title, message, isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>
                    &times;
                </span>
                <h1>{title}</h1>
                <p>{message}</p>
                <div className='modal-button-container'>
                    <button className='modal-button modal-button-positive' onClick={onClose}>Positive</button>
                    <button className='modal-button modal-button-negative' onClick={onClose}>Negative</button>
                </div>
            </div>

        </div>
    );
};

export default Modal;
