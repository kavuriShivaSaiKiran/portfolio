import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[60px] xs:top-[80px] flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-3 xs:mt-3 md:mt-2">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
          <div className="w-1 sm:h-60 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`max-[300px]:text-[30px] font-black text-white lg:text-[60px] text-[40px] lg:leading-[98px] mt-2  xs:text-[28px] sm:text-[28px]`} style={{fontFamily: styles.font}}>
            Hi, I'm <span className="text-[#915eff]" style={{fontFamily: styles.font}}>Shiva</span>
          </h1>
          <p className={`max-[300px]:text-[13px] text-[#dfd9ff] mt-0 text-justify lg:text-[19px] lg:leading-9 lg:max-w-5xl md:text-[18px] md:leading-9 sm:text[15px]  xs:text-[16px] xs:leading-7 flex flex-1 ` }>
            Are you ready to embark your journey through the digital landscapes 
            I've crafted? Step into my world to create stunning online experiences. 
            As a passionate web developer, I invite you to explore my meticulously designed portfolio.
            Try to swivel the computer below.
          </p>
        </div>

      </div>

        <div className="h-[350px] md:h-[550px] xs:h-[400px] sm:h-[500px] xl:h-[650px] " >
          <ComputersCanvas/>
        </div>

        <div className="max-[450px]:hidden absolute xs:bottom-10 bottom-20 w-full
        flex justify-center items-center xl:flex md:flex xs:hidden">
          <a href="#about">
            <div className=" w-[30px] h-[50px] rounded-2xl 
            border-4 border-secondary flex justify-center items-start p-2 ">
              <motion.div 
              animate = {{
                y: [0, 24, 0]
              }}
              transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>

        <div className="absolute xs:bottom-10 bottom-20 w-full
        flex justify-center items-center ">
          <a href="#about">
            <div className="md:hidden xl:hidden">
              <motion.div 
              animate = {{
                y: [0, 20, 0],
                opacity:1
              }}
              transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
              className="w-3 h-6 rounded-full bg-secondary mb-3"
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero