/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Dhiwa Aqsha
          </h2>
          <h3 className="headline-2 max-w-[12ch] sm:max-w-[16ch] lg:max-w-[19ch] mt-4 mb-6 lg:mb-8">

          Engineer, Developer, and Data Enthusiast
          </h3>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/public/files/dhiwa-aqsha-cv.pdf"
              label="Download CV"
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t  to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/foto-dhiwa1.png"
              width={656}
              height={800}
              alt="dhiwa-aqshak"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero