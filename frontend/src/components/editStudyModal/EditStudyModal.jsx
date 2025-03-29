import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditStudyModal.css";
import SERVER_URL from "../../server";
import axios from "axios";

const EditStudyModal = ({ isOpen, onClose }) => {
  const [encryptedPassword, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const VERIFY_PASSWORD_URL = `${SERVER_URL}/api/verify-password`;
  const navigate = useNavigate();
  const { id: studyId } = useParams(); // URL에서 studyId를 가져옵니다.

  if (!isOpen) return null;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleVerifyPassword = async () => {
    try {
      const response = await axios.post(VERIFY_PASSWORD_URL, {
        studyId,
        encryptedPassword,
      });

      console.log(response.data);

      if (response.data.success) {
        navigate(`/study-detail/${studyId}/form`); // 비밀번호 검증 성공 시 /study-detail/:id/form 경로로 이동
      } else {
        setErrorMessage("비밀번호 검증에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("비밀번호 검증 API 호출 실패!:", error);
      setErrorMessage("비밀번호 검증에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title">연우의 개발공장</p>
          <button
            type="button"
            onClick={onClose}
            className="modal-close-button"
          >
            나가기
          </button>
        </div>
        <p className="modal-message">권한이 필요해요!</p>
        <div className="modal-input-container">
          <p className="modal-input-label">비밀번호</p>
          <input
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            value={encryptedPassword}
            onChange={handlePasswordChange}
            className="modal-input"
          />
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
        <button
          className="modal-verify-button"
          type="button"
          onClick={handleVerifyPassword}
        >
          수정하러 가기
        </button>
      </div>
    </div>
  );
};

export default EditStudyModal;