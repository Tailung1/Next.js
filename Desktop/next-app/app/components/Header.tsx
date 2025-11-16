import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href={"/aboutus"}>about us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/contact"}>contact</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
