import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div className="container-404">
      <h1 className="title-not-found">Ooopss......</h1>
      <h1 className="title-not-found">Page you've been search is not found</h1>
    </div>
  );
}
