"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const formm = document.querySelector(".search-form") as HTMLFormElement;
    if (formm) {
      formm.reset();
    }
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
