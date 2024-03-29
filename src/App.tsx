import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";

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

      <h2>Buttons</h2>
      <Button onClick={() => alert('Clicked')}>Click me</Button>
      <Button backgroundColor="#42A5F5" hoverColor="#1E88E5" onClick={() => alert('Clicked')}>Click me</Button>
    </div>
  )
}

export default App;
