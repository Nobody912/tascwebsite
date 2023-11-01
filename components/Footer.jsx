import Image from "next/image";
import Link from "next/link";

export default function Footer(props) {
  return (
    <footer className="flex w-full p-8 justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full max-w-screen-xl gap-4">
        <div className="flex flex-col w-full justify-start items-start gap-2">
          <div className="flex flex-row w-full h-8 md:h-12 grow justify-start select-none">
            <div className="flex aspect-square mr-2">
              <div className="relative z-0 flex w-full h-full">
                <Image
                  className="object-contain z-0"
                  src="/media/img/logo_black.svg"
                  alt="TASC Logo"
                  fill
                />
              </div>
            </div>
            <div className="flex aspect-[4/1] pl-4">
              <div className="relative z-0 flex w-full h-full">
                <Image
                  className="object-contain z-0"
                  src="/media/img/uiuc_wordmark.svg"
                  alt="UIUC Logo and Wordmark"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col grow justify-start">
            <p className="text-xs sm:text-sm text-black">
              © Taiwanese American Student Club 2023
            </p>
            <p className="text-xs sm:text-sm text-black">
              The UIUC logo and wordmark are trademarks of the University of
              Illinois Urbana-Champaign.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start items-start md:items-end">
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
