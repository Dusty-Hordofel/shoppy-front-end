"use client";
// import { Button } from "@/components/ui/buttons/button/button";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
// import "./modal.css";

// type ModalProps = {
//   title: string;
//   content: string;
//   closeModal: () => void;
//   onConfirm?: boolean;
// };

const ResultModal = ({ children }: { children: ReactNode }) => {
  return (
    <div
      id="modal-root"
      //   backdrop-blur-sm backdrop-filter
      className=" fixed inset-0 bg-[hsla(0,0%,7%,0.36)]  flex justify-center items-center z-[900]"
    >
      {children}
    </div>
  );
};

export default ResultModal;
