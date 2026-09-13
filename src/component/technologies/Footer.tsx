import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">

                        {/* {LOGO} */}
          <div className="sm:col-span-2 lg:col-span-2">

            {/* Logo */}
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-8 w-auto object-contain"
            />

            {/* Description */}
            <p className="mt-3 max-w-xs text-[12px] leading-3.5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">

              <a
                href="#"
                className="text-[12px] text-slate-500 transition hover:text-[#D91B7E]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] text-slate-500 transition hover:text-[#D91B7E]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] text-slate-500 transition hover:text-[#D91B7E]"
              >
                LinkedIn
              </a>

            </div>
          </div>

                        {/* {PRODUCT} */}

          <div>
            <h3 className="text-[12px] font-semibold uppercase text-slate-900">
              Product
            </h3>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Projects
                </a>
              </li>

            </ul>
          </div>

                 {/* { COMPANY} */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase text-slate-900">
              Company
            </h3>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>

            {/*  LEGAL */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase text-slate-900">
              Legal
            </h3>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-slate-400 transition hover:text-[#D91B7E]"
                >
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/*  SECOND LINE */}
        <div className="border-t border-slate-100 py-5">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p className="text-[15px] text-slate-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex gap-5">

              <a
                href="#"
                className="text-[13px] text-slate-400 transition hover:text-[#D91B7E]"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-[13px] text-slate-400 transition hover:text-[#D91B7E]"
              >
                Terms
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;