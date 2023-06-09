import React, { useContext } from "react";
import { ToastContext } from "../context";

export const useToast = () => useContext(ToastContext);
