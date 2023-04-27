import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">Sandwich Shop</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/customers">New Customer</Link>
            </li>
            <li>
              <Link href="/orders">Add Order</Link>
            </li>
            <li>
              <Link href="/orders/view">View Orders</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
