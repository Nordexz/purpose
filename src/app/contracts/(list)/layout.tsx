import React from "react";
import { SideMenu } from "../components/marketplace-filter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <h2 className="text-lg font-bold">Browse by Category</h2> */}
      <div className="flex gap-10">
        {/* <SideMenu /> */}
        {children}
      </div>
    </>
  );
}
