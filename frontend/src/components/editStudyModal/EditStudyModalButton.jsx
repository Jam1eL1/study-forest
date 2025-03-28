import React from 'react';
import EditStudyModal from './EditStudyModal';
import { useEditStudyModalController } from './EditStudyModalController';
import './EditStudyModalButton.css';

const EditStudyModalButton = ({ buttonText }) => {
  const { editStudyModal, handleOpenEditStudyModal, handleCloseEditStudyModal } = useEditStudyModalController();

  return (
    <>
      <button className='openEditStudyModalButton' onClick={handleOpenEditStudyModal}>{buttonText || '스터디 수정 모달 열기'}</button>
      <EditStudyModal isOpen={editStudyModal} onClose={handleCloseEditStudyModal} />
    </>
  );
};

export default EditStudyModalButton;