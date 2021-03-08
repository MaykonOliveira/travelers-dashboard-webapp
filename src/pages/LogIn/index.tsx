import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  ForgotRemember,
  AccessAlertMessage,
  Background,
} from './styles';

interface LogInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: LogInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        formRef.current?.setErrors({});
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Background />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <ForgotRemember>
            <div>
              <input name="remember" type="checkbox" />
              <span>Lembre-me</span>
            </div>

            <Link to="/">Esqueci minha senha</Link>
          </ForgotRemember>

          <Button type="submit">Acessar plataforma</Button>
        </Form>

        <AccessAlertMessage>
          <FiAlertCircle />
          <p>Acesso restrito à sócios e moderadores</p>
        </AccessAlertMessage>
      </Content>
    </Container>
  );
};

export default LogIn;
