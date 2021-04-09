import { createContext } from "react";

const Authcontext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export default Authcontext;
