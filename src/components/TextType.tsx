import React, { useEffect, useState } from "react";
import "./TextType.css";

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TextType: React.FC<TextTypeProps> = ({
  texts,
  typingSpeed = 120,
  deletingSpeed = 60,
  delay = 1000,
}) => {
  const [text, setText] = useState("");
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = loop % texts.length;
    const fullText = texts[current];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loop, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <h1 className="text-type">
      {text}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TextType;
