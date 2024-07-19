import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const FormModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      const script = document.createElement("script");
      script.src = "https://cdn.withpersona.com/dist/persona-v5.0.0.js";
      script.integrity =
        "sha384-0LXHuG9ceBdEVRdF698trmE0xe0n9LgW8kNTJ9t/mH3U8VXJy0jNGMw/jPz9W82M";
      script.crossOrigin = "anonymous";
      script.onload = () => {
        const client = new window.Persona.Client({
          templateId: "itmpl_ttihgmCqcQg56aEW4phvNG5xN7ZN",
          environmentId: "env_j4Fb9LvVcYTCHa7bG3s4xDeXprNA",
          onReady: () => client.open(),
          // eslint-disable-next-line no-unused-vars
          onComplete: ({ inquiryId, status, fields }) => {
            console.log(`Completed inquiry ${inquiryId} with status ${status}`);
          },
        });
      };
      document.body.appendChild(script);
    }
  }, [modalIsOpen]);

  return (
    <div className="flex items-center justify-center mt-4 ">
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl mb-4">Verify Your Identity</h2>
        <button
          onClick={() => setModalIsOpen(false)}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default FormModal;
