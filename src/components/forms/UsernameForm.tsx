import { motion } from "framer-motion";
import React, { ChangeEvent, FormEvent } from "react";

const formContainer = "form-container p-9 flex-row justify-center font-mono border-t-8 border-2 border-red-500 w-full";
const gameTitle = "game-title text-center";
const form = "form flex justify-around items-center";
const usernameInput = "username-input w-64 h-10 p-2 focus:outline-none";
const submitButton = "submit-button p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white";

interface UsernameFormProps {
  username: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateGame: () => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({
  username,
  handleChange,
  handleCreateGame,
}: UsernameFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateGame();
  };

  return (
    <div className={formContainer}>
      <h1 className={gameTitle}>dev-duel.exe</h1>
      <form className={form} onSubmit={handleSubmit}>
        <input
          className={usernameInput}
          type="text"
          value={username}
          onChange={handleChange}
          aria-label="username"
          placeholder="username"
          required
        />
        <motion.button
          className={submitButton}
          whileTap={{ scale: 0.97 }}
          type="submit"
        >
          Run Program
        </motion.button>
      </form>
    </div>
  );
};

export default UsernameForm;
