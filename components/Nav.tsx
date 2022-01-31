import Link from "next/link";

export default function Nav() {
  const navLinks = [
    {
      title: "Bio",
      link: "/link",
    },
    {
      title: "Another one",
      link: "/link",
    },
  ];

  return (
    <nav className="nav p-3 border-bottom">
      {/* <Link href="/" passHref>
        <h2 className="pointer">Di Su</h2>
      </Link> */}
      {navLinks.map((item) => {
        return (
          <Link href={item.link} passHref>
            <h2 className="text-center text-xl">{item.title}</h2>
          </Link>
        );
      })}

      {/* <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">Bio</p>
      </Link> */}
    </nav>
  );
}
