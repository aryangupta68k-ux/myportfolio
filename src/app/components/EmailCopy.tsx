'use client';

import { useState } from 'react';

interface EmailCopyProps {
  email: string;
}

const EmailCopy: React.FC<EmailCopyProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer opacity-50 decoration-[#ffffff50] transition-all duration-200 ease-in-out underline underline-offset-[3px] hover:opacity-75"
      aria-label={`Copy email address: ${email}`}
    >
      {copied ? 'copied!' : '(copy)'}
    </button>
  );
};

export default EmailCopy;
