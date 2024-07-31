"use client";
import FileUpload from "@/components/FileUpload";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Generate Your Own Caricature</h1>
      <FileUpload />
    </div>
  );
}
