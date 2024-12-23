import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="min-h-[400px] text-white"
      style={{
        backgroundImage: "url('/coffee-footer-68P4qxM0.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href=""
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffe Cafe
            </a>
            <p className="pt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum illo dicta nemo
            </p>
            {/* <button className="bg-primary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3"> */}
            <a
              href="https://github.com/Smah-amen/Cafe"
              target="_blank"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full hover:scale-105 duration-200"
            >
              Visit our Organization
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <p className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <p className="text-xl font-bold text-white mb-3">Quick Links</p>
              <ul className="flex flex-col items-start gap-3 text-white font-semibold">
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <p className="text-xl font-bold text-white mb-3">Address</p>
              <ul className="flex flex-col items-start gap-3 text-white font-semibold">
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Cairo, Egypt
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    +20 123 456 7890
                  </a>
                </li>
                <li>
                  <div className="space-x-3 mt-3">
                    <a href="#">
                      <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                    <a href="#">
                      <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
