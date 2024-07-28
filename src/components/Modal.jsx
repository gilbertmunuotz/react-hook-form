/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, data }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-8 rounded-lg shadow-md mx-4 w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4">Submitted Data</h2>
                <pre className="text-gray-800">{JSON.stringify(data, null, 2)}</pre>
                <button
                    onClick={onClose}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;