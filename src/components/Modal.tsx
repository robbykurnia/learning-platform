import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const Container = styled.div`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #a39c9c45;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ show, onClose, children }: ModalProps) {
  const handleBubble = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div>
      {show && (
        <Container onClick={onClose}>
          <div onClick={handleBubble} aria-hidden="true">
            {children}
          </div>
        </Container>
      )}
    </div>
  );
}

export default Modal;
