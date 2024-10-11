import { createContext } from "react";
import { IRefContext } from "../Types/interfaces";

const RefContext = createContext<IRefContext | null>(null);

export default RefContext;
