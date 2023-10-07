import { useParams } from "react-router-dom";
import Page from "../layouts/Page";
import { useEffect, useState } from "react";
import {
  dummy1SidebarItems,
  isDummy1SidebarType,
} from "../model/dummy-1-sidebar-config";
import Dummy1Cat1 from "../components/dummy1/Dummy1Cat1";
import Dummy1Cat2 from "../components/dummy1/Dummy1Cat2";
import Dummy1Cat3 from "../components/dummy1/Dummy1Cat3";
import Dummy1Cat4 from "../components/dummy1/Dummy1Cat4";

function Dummy1() {
  const { type } = useParams();
  const [dummy1Type, setdummy1Type] = useState<string>("cat1");

  useEffect(() => {
    if (type && isDummy1SidebarType(type)) {
      setdummy1Type(type);
    }
  }, [type]);

  const renderDummy1Component = () => {
    switch (dummy1Type) {
      case "cat1":
        return <Dummy1Cat1 />;
      case "cat2":
        return <Dummy1Cat2 />;
      case "cat3":
        return <Dummy1Cat3 />;
      case "cat4":
        return <Dummy1Cat4 />;
      default:
        return <p>WIP</p>;
    }
  };

  return (
    <Page sidebarItems={dummy1SidebarItems} pageTitle="optional dummy title">
      <h1>Dummy 1 Page</h1>
      <div>{renderDummy1Component()}</div>
    </Page>
  );
}

export default Dummy1;
