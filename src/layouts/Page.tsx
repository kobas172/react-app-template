import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface PageProps {
  children: ReactNode;
  sidebarItems?: { label: string; link: string }[]; // Optional array of sidebar items
  pageTitle?: string; // New prop for the title of the page
}

const Page = ({ children, sidebarItems, pageTitle }: PageProps) => {
  return (
    <div className="page-layout">
      <Header />
      <div className="content-wrapper">
        {sidebarItems && <Sidebar items={sidebarItems} />}{" "}
        {/* Pass sidebarItems to Sidebar if provided */}
        <div className="main-content">
          <>
            {pageTitle && <h4 className="page-title">{pageTitle}</h4>}
            <div className="main-content-inner">{children}</div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Page;
