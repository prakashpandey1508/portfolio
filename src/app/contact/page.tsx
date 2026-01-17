import { Box } from "@/components/ui/moving-border";
import { AiOutlineMail } from "react-icons/ai";
import { FaMobileAlt , FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <Box
        borderRadius="1rem"
        className=" dark:bg-dark-color-2 text-white dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col"
        containerClassName="m-auto w-[750px] max-w-[90%] h-auto md:mt-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Get in touch with Me</h1>
        <div className="mt-10 text-lg">
          <ul>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <AiOutlineMail size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:prakashpandey00002@gmail.com"
                  target="_blank"
                  className="text-blue-300 dark:text-blue-200"
                >
                  prakashpandey00002@gmail.com
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaLinkedin size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Connect on LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/prakashpandey1508/"
                  target="_blank"
                  className="text-blue-300 dark:text-blue-200"
                >
                  @prakashpandey1508
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaTwitter size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Twitter:</span>{" "}
                <a
                  href="https://x.com/pkpandey1508"
                  target="_blank"
                  className="text-blue-300 dark:text-blue-200"
                >
                  @pkpandey1508
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaMobileAlt size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Phone:</span>{" "}
                +91 9509697424, 8340338741
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <ImLocation size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Address:</span> Bengaluru, India
              </div>
            </li>
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default Contact;
