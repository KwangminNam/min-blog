"use client";

import { useState } from "react";

const CopyButton: React.FC<{ content: string }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="copy-button" aria-label="Copy code">
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
