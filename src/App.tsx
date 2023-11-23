import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleAlert() {
    alert("submitted");
  }

  function openModal(e: any) {
    e.preventDefault();
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <h1>
        Modal app
      </h1>

      <h2>Alert</h2>
      <form onSubmit={handleAlert}>
        <button type="submit">Show alert</button>
      </form>

      <h2>Modal</h2>
      <form onSubmit={openModal}>
        <button type="submit">Show modal</button>
        <Modal title="Title" message="Message" isOpen={isModalOpen} onClose={closeModal} />
      </form>
    </div>
  )
}

export default App;
