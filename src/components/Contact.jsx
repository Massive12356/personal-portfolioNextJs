"use client";
import emailjs from "@emailjs/browser";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  // handling my form emails from email.js
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted

    try {
      const result = await emailjs.sendForm(
        "service_5za6jht",
        "template_v7upf3q",
        form.current,
        {
          publicKey: "06TI82nSkro1UpF8E",
        }
      );
      console.log("SUCCESS!", result);
      toast.success("Message sent successfully!");
      form.current.reset(); // Reset form after successful submission
    } catch (error) {
      console.error("FAILED...", error.text);
      toast.success("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // Stop loading after response
    }
  };

  return (
    <div id="contact" className="h-screen lg:h-auto pr-5 py-20 lg:py-40">
      <Heading text={"Get in Touch"} />

      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            alt="contact"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Full Name"
              name="name"
              required
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
            name="title"
            required
          />
          <textarea
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Message Me..."
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm tracking-wider text-white outline-none font-light hover:bg-yellow-500 transition-colors cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending ..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
