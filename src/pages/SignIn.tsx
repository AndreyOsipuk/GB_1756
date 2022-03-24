import React, { FC, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { logIn } from '../services/firebase';

export const SignIn: FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await logIn(email, password);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <p>Login:</p>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <p>Password:</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <br />
      <Link to="/signup">
        <button type="submit">sign Up</button>
      </Link>
    </>
  );
};
