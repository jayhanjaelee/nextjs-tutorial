import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Link from "next/link";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            style={{ width: 80, display: "block" }}
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <Header as="h1">
          <Link href="/">Hanjae lee</Link>
        </Header>
      </div>
      <Gnb />
    </div>
  );
}
