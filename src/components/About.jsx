import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import {SectionWrapper} from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className = "xs:w-[200px] md:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[260px]
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[16px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText} style={{fontFamily: styles.font}}>Overview.</h2>
      </motion.div> 

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] lg:text-[18px] max-w-3xl lg:max-w-5xl leading-[30px] text-justify"
      >
        In this portfolio, you'll discover a diverse range of projects,
         each with its own story and purpose. Whether it's a responsive e-commerce 
         platform that combines aesthetics and functionality or a dynamic web application 
         that simplifies complex tasks, every project is a testament to my dedication
          to quality craftsmanship. Web development is an ever-evolving landscape, and I'm committed 
          to staying at the forefront of industry trends.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")