import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => (
  <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
    <Tilt
      options = {{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className = "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name}  
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end margin-3 card-img_hover">

          <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
          </div>

        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="flex gap-2 relative top-24">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name} 
          </p>
        ))}
      </div>

    </Tilt>

  </motion.div>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText} style={{fontFamily: styles.font}}>Crafting with Code.</h2>
      </motion.div> 

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 1)}
          className="mt-3 text-secondary lg:text-[18px]  lg: max-w-5xl text-[15px] max-3-xl leading-[25px] text-justify "
        >
          Dive into captivating fusion of creativity and techinical prowess. 
          My portfolio is testament to the art of web developement and Machine Learning
          showcasing a diverse array of projects. From sleek and minimalistic webpages to 
          Tensorflow based ML algorithms, my projects showcase the craft of coding. Click on
          the <span className="text-indigo-500" style={{fontFamily: styles.font}}>github icon</span> on the card below for the src code.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard
            key = {`project-${index}`}
            index = {index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")