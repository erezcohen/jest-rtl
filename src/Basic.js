import { useState, useEffect } from "react";

const Basic = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const foo = async () => setTitle(await Promise.resolve("New Title"));
    foo();
  }, []);

  return <span>{title}</span>;
};

export default Basic;
