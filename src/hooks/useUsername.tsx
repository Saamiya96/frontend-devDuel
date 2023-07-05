import { useState, useEffect } from "react";

function useUsername() {
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return { username, setUsername };
}

export default useUsername;
