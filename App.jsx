import React, { useState } from 'react';
import { Button, Card, Modal } from './components';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React UI Component Library</h1>

      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

      <Card
        title="Reusable Card"
        content="This is a card component"
        footer="Card footer here"
      />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is modal content inside the reusable modal component.</p>
        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
}

export default App;
