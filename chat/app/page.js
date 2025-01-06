import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="page-header">
        <a href="">
          <img src="/images/logo.png" />
        </a>
        <ul className="header-nav">
          <li><a href="">國內校區</a></li>
          <li><a href="">美洲校區</a></li>
          <li><a href="">歐洲校區</a></li>
          <li><a href="">日本校區</a></li>
        </ul>
      </header>
      <div className="page-content">
        <div className="content-nav">
          <div className="item">
            <img src="/images/item1.png" />
            <span>my email</span>
          </div>
          <div className="item">
            <img src="/images/item2.png" />
            <span>my email</span>
          </div>
          <div className="item">
            <img src="/images/item3.png" />
            <span>my email</span>
          </div>
          <div className="item">
            <img src="/images/item4.png" />
            <span>my email</span>
          </div>
          <div className="item">
            <img src="/images/item5.png" />
            <span>my email</span>
          </div>
        </div>
      </div>
    </>
  );
}
