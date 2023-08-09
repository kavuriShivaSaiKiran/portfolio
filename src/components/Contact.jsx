import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//template_4bn1608
//service_vkgvi9o
//1xCvxLk9hAytCxOn-

function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const formRef = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target 
    setForm({ ...form, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
    .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
      from_name : form.name,
      to_name: 'Shiva Sai Kiran Kavuri',
      from_email: form.email,
      to_email: "kavurishivasaikiran@gmail.com",
      message: form.message
    }, 
    import.meta.env.VITE_PUBLIC_KEY)
    .then(() => {
      if(validateEmail(form.email))
        {setLoading(false)
        alert('Thank You. I will get back to you as soon as possible')

        setForm({
          name: "",
          email: "",
          message: "",
        })}
      else{
        alert('please enter valid email')
        setLoading(false)
      }   
    }, 
    (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong.')
    })
  }



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10  overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.6] bg-black-100 p-6 rounded-2xl"
      >
        <p className= {styles.sectionSubText}>Get in touch</p>
        <h3 className= {styles.sectionHeadText} style={{fontFamily: styles.font}}>Let's Collaborate</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name"  
              value={form.name}
              onChange={handleChange}
              required
              placeholder="what's your name"
              className="bg-tertiary py-3 px-3
               placeholder:text-secondary rounded-lg outline-none
               border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="text" name="email"  
              value={form.email}
              onChange={handleChange}
              required
              placeholder="what's your email address"
              className="bg-tertiary py-3 px-3
               placeholder:text-secondary rounded-lg outline-none
               border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7} type="text" name="message"  
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
              className="bg-tertiary py-3 px-3
               placeholder:text-secondary rounded-lg outline-none
               border-none font-medium"
            />
          </label>

          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit
            text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading?"Sending...":"Send"}
          </button>
        </form>

      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" 
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")