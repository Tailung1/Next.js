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
          {/* <li>
            {" "}
            <Link href={"/signin"}>signIn</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/signup"}>signUp</Link>{" "}
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
