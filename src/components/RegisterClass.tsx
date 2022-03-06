import React from 'react';
import JoinClass from 'src/models/JoinClass';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import Modal from './Modal';

interface RegisterClassProps {
  id: string
}

const Container = styled.div`
border: 1px solid black;
border-radius: 8px;
padding: 8px;
& > * {
  margin-bottom: 8px;
}

.register {
  margin: 0px;
}
`;

function RegisterClass({ id }: RegisterClassProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleRegister = () => {
    JoinClass(Number(id), name, email)
      .then((res: { message: string }) => {
        setMessage(res.message);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };
  return (
    <Container data-testid="RegisterClass">
      <div>Register</div>

      <hr />

      <div>Full Name</div>
      <div>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="input your name"
          required
        />
      </div>

      <div>Email</div>
      <div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="input your email"
          required
        />
      </div>

      <Button className="register" onClick={handleRegister} disabled={!email || !name}>Register</Button>
      <Modal show={!!message} onClose={() => setMessage('')}>
        <Card>
          <div>
            {message}
          </div>
          <div>
            <Button onClick={() => setMessage('')} fullWidth>
              OK
            </Button>
          </div>
        </Card>
      </Modal>
    </Container>
  );
}

export default RegisterClass;
