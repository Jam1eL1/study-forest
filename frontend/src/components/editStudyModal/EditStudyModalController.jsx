import { useState } from 'react';

export const useEditStudyModalController = () => {
  const [editStudyModal, setEditStudyModal] = useState(false);

  const handleOpenEditStudyModal = () => {
    setEditStudyModal(true);
  };

  const handleCloseEditStudyModal = () => {
    setEditStudyModal(false);
  };

  return { editStudyModal, handleOpenEditStudyModal, handleCloseEditStudyModal };
};