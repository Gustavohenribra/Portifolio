"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oh não, algo deu errado... talvez atualizar a página?</p>
    </div>
  );
}
