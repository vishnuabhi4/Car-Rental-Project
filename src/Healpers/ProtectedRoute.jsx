import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowModal(true);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        {showModal && (
          <Modal message={'You must be logged in to view this page'} onClose={() => setShowModal(false)}>
            <p className="">You must be logged in to view this page.</p>
          </Modal>
        )}
        <div className="dark:text-white text-center text-gray-500 mt-10">Login to access your cart</div>
      </>
    );
  }

  return children;
}
