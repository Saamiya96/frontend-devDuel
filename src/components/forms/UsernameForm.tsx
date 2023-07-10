import React, { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface UsernameFormProps {
  username: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({
  username,
  handleChange
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="p-9 flex-row justify-center font-mono border-t-8 border-2 border-red-500 w-full">
      <h1 className="text-center">dev-duel.exe</h1>
      <form className="pt-4 flex justify-around items-center" onSubmit={handleSubmit}>
        <input
          className="w-64 h-10 p-2 focus:outline-none"
          type="text"
          value={username}
          onChange={handleChange}
          aria-label="username"
          placeholder="username"
        />
        <Link to="/game" className="p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white" type="submit">
          Run Program
        </Link>
      </form>
    </div>
  );
}

export default UsernameForm;
