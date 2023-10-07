import { useFetch } from "../hooks/useFetch";
import Page from "../layouts/Page";
import { DummyInterface } from "../model/schema";

function Dummy2() {
  const url = "http://localhost:8080/api/endpoint";
  const { data } = useFetch<DummyInterface[]>(url);

  return (
    <Page>
      <h1>Dummy 2 Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Dummy text</p>}
    </Page>
  );
}

export default Dummy2;
