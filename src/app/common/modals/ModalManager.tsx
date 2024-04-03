import { useAppSelector } from '../../store/store';
import LoginForm from '../../../features/auth/LoginForm';
import { FC } from 'react';

interface ModalLookup {
  [key: string]: FC<LoginFormProps>;
}

interface LoginFormProps {
  data: string | null;
}

const ModalManager = () => {
  const modalLookup: ModalLookup = { LoginForm: LoginForm };
  const { type, data, open } = useAppSelector((state) => state.modals);
  let renderedModal;

  if (open && type) {
    const ModalComponent = modalLookup[type];
    renderedModal = <ModalComponent data={data} />;
  }
  return <span>{renderedModal}</span>;
};
export default ModalManager;
