import { FC, ReactNode } from 'react';
import { Modal, ModalProps } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { closeModal } from './modalSlice';

interface ModalWrapper extends ModalProps {
  children: ReactNode;
  header: string;
}

const ModalWrapper: FC<ModalWrapper> = ({ children, header, ...props }) => {
  const { open } = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  return (
    <Modal open={open} onClose={() => dispatch(closeModal())} size={props.size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};
export default ModalWrapper;
