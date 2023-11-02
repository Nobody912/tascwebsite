import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row justify-between items-end w-full max-w-screen-xl p-4 gap-4">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col grow justify-start">
            <p className="text-black">© Taiwanese American Student Club 2023</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start md:items-end">
          <Link
            className="underline hover:text-neutral-600 transition-colors duration-200"
            href="https://www.instagram.com/tascuiuc/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </Link>
          <Link
            className="underline hover:text-neutral-600 transition-colors duration-200"
            href="https://www.facebook.com/tasc.uiuc/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </Link>
          <Link
            className="underline hover:text-neutral-600 transition-colors duration-200"
            href="https://linktr.ee/TASCUIUC"
            target="_blank"
            rel="noreferrer"
          >
            Linktree
          </Link>
        </div>
      </div>
    </footer>
  );
}
