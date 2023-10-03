import * as React from "react";
import RoutesNavigation from "./Routes";
import { AuthProvider } from "./AuthProvider";

function MyTabs() {
  return (
    <AuthProvider>
      <RoutesNavigation />
    </AuthProvider>
  );
}
export default MyTabs;
