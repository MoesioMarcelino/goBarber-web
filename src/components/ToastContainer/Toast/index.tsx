import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { ToastProps, useToast } from '../../../hooks/Toast';
import { Container } from './styles';

interface ToastData {
  toast: ToastProps;
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastData> = ({ toast, style }) => {
  const { removeToast } = useToast();

  const { id, title, type, description } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container type={type} style={style}>
      <FiInfo size={20} />
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <button onClick={() => removeToast(id)} type="button">
        {icons[type || 'info']}
      </button>
    </Container>
  );
};

export default Toast;
