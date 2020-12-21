import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/Toast';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { AnimatedContent, Background, Container, Content } from './styles';
import api from '../../services/api';

interface FormProps {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormProps) => {
      formRef.current?.setErrors({});

      setLoading(true);

      try {
        const schema = Yup.object().shape<FormProps>({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: `E-mail de recuperação enviado!`,
          description:
            'Enviamos um e-mail de recuperação de senha para você, verifique sua caixa de entrada',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro de Autenticação',
          description:
            'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente!',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimatedContent>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperação de senha</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button loading={loading} type="submit">
              Entrar
            </Button>
          </Form>
          <Link to="/">
            <FiLogIn />
            Voltar para logon
          </Link>
        </AnimatedContent>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
