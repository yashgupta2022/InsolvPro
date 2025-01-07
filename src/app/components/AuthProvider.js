"use client"; // Ensure this is at the top of the file for client components

import { RecoilRoot } from "recoil";
import React from "react";

// Ensure this component is client-side
const AuthProvider = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default AuthProvider;
