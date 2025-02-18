import { Copy } from "lucide-react";
import { useState } from "react";

function CopyToClipboard({ text }: { text: string }) {
  const [btnText, setBtnText] = useState("Copy  ");
  function copyText() {
    navigator.clipboard.writeText(text);
    const oldText = btnText;
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText(oldText);
    }, 1000);
  }

  return (
    <div className="flex">
      <button
        onClick={copyText}
        className="flex gap-1 p-4 text-lg items-center bg-neutral-800 hover:bg-yellow-600 hover:text-black w-28 justify-center"
      >
        <Copy size={20} />
        {btnText}
      </button>
      <span
        className="bg-black p-4 font-mono text-sm items-center"
        title={text}
      >
        {text.length > 27 ? `${text.slice(0, 27)}...` : text}
      </span>
    </div>
  );
}

export default CopyToClipboard;
