import {ButtonOutline, ButtonPrimary} from './Button'
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

export default function Hero() {
  return (
    <div>
      <section id="home" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  className="img-cover"
                  width={40}
                  height={40}
                  src="https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761514/smIcon_xtl4cy.jpg"
                  alt="Shwe Win Aung"
                  srcset=""
                />
              </figure>

              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Avaiable for work
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
            </h2>

            <div className="flex items-center gap-3">
              <ButtonPrimary label="Download CV" icon={<DownloadIcon className='cv-icon'/>}/>
              <ButtonOutline href="#about" label="Scroll Down" icon={ <ArrowDropDownSharpIcon className=''/>}/>
              </div>
          </div>

          <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-zinc-600 via-25% via-zinc-800 to-55% rounded-[60px] overflow-hidden">
              <img
                className="w-full"
                width={656}
                height={800}
                src="https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761724/pf3_gmftkv.png"
                alt=""
                srcset=""
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
