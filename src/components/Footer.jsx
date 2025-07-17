import { ButtonPrimary } from "./Button";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/niteash",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shwe-win-aung/",
  },
  {
    label: "X",
    href: "https://x.com/WinNitesh",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/i_m_nicki",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/this.nikki",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href="mailto : nickytwist70@gmail.com"
              label="Start Project"
              classes=" reveal-up"
              icon={<ArrowRightSharpIcon />}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761755/favSWA_cscnax.png"
              width={40}
              height={40}
              alt="Logo"
              className=""
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">Shwe Win Aung</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
