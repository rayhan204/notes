"use client"; // Harus menggunakan "use client" di App Router

import { Provider } from "react-redux";
import { store } from "./index";

import { ReactNode } from "react";

export default function StoreProvider({ children }: { children: ReactNode }) {
return <Provider store={store}>{children}</Provider>;
}