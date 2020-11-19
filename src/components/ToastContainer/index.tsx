import React from 'react';
import { useTransition } from 'react-spring';
import { ToastProps } from '../../hooks/Toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  toasts: ToastProps[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const toastsWithTransitions = useTransition(toasts, (toast) => toast.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <Container>
      {toastsWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
