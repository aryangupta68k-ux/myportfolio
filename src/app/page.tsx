import Link from "next/link";
import EmailCopy from "./components/EmailCopy";

export default function Home() {
  return (
    <main className="flex flex-col justify-between text-white no-scrollbar scroll-smooth gap-8 p-4 sm:p-8 w-full sm:w-full">
      <div className="w-full sm:w-80 flex flex-col gap-4 sm:gap-3 z-10">
        <div className="flex flex-col gap-0">
          <h1>vedant</h1>
          <p className="text-yves-pale">bergamo, italy</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            ixd student at{" "}
            <a
              className="blue-link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://ciid.dk"
            >
              ciid.dk
            </a>
            . previously built things at{" "}
            <a
              className="blue-link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.ycombinator.com/companies/groww"
            >
              groww.in
            </a>
            . i'm an art history nerd, an amateur{" "}
            <a
              className="blue-link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/arcadefiredump"
            >
              photographer
            </a>{" "}
            and an athlete.
          </p>
          <p>
            get in touch:{" "}
            <a
              className="blue-link"
              href="https://x.com/vxdxxt"
              target="_blank"
              rel="noreferrer noopener"
            >
              x.com
            </a>{" "}
            or email <EmailCopy email="hello@vedantja.in" />
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 sm:gap-12">
        <div className="flex flex-col gap-2 z-10">
          <p className="text-yves-pale">projects</p>
          <div className="flex flex-col gap-2">
            <Link className="w-fit" href="/project/block">
              <div className="flex flex-col gap-1">
                <div>
                  <h2>block</h2>
                </div>
              </div>
            </Link>
            <Link className="w-fit" href="/project/knob">
              <div className="flex flex-col gap-1">
                <div>
                  <h2>knob</h2>
                </div>
              </div>
            </Link>
            <Link className="w-fit" href="/project/rock-music">
              <div className="flex flex-col gap-1">
                <div>
                  <h2>rock-music</h2>
                </div>
              </div>
            </Link>
            <Link className="w-fit" href="/project/on-sight">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <h2>on-sight</h2>
                </div>
              </div>
            </Link>
            <Link className="w-fit" href="/project/painting">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <h2>painting</h2>
                </div>
              </div>
            </Link>
            <Link className="w-fit" href="/work/transactions">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p>transaction journeys</p>
                </div>
              </div>
            </Link>
            <Link className="w-fit" href="/work/qr">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p>qr codes</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-128 flex flex-col z-10">
        <p>
          if you have some spare time:{" "}
          <a
            className="blue-link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://youtu.be/UD2VcSmGrSc"
          >
            youtube.com
          </a>
        </p>
        <p className="text-yves-pale">updated august, 2025</p>
      </div>
    </main>
  );
}
