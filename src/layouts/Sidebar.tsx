import { Link } from "react-router-dom";

interface SidebarProps {
  items: { label: string; link: string }[]; // Array of sidebar items
}

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {items.map((item, index) => (
          <Link key={index} to={item.link} className="sidebar-content-item">
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
