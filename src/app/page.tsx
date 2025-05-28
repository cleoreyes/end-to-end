import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center mx-auto w-3/4">
      <main className="flex flex-col items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-full">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQFLCUblM1vkKQ/profile-displayphoto-shrink_400_400/B56ZYzW9fYHoAo-/0/1744618379910?e=1753920000&v=beta&t=R8V6opQTy6Z6aW3q3bjP7T2gbfT5hvjEecGpWIKSDJI"
              alt="Cleo Reyes"
              width={1500}
              height={2000}
              className="rounded-sm w-full h-auto object-cover aspect-[4/5] max-w-none"
            />
            <div className="pt-5 text-sm">
              <h1 className="font-bold">Contact Info</h1>
              <span className="flex flex-row items-center gap-1"><MdEmail/> creyes25@uw.edu</span>
              <a
                href="https://www.linkedin.com/in/cleoreyes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row items-center gap-1"><FaLinkedin/> LinkedIn</span>
              </a>
              <a
                href="https://github.com/cleoreyes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row items-center gap-1"><FaGithub/> GitHub</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="flex flex-col gap-2 text-sm">
                <h1 className="text-2xl">Hey, my name is Cleo Reyes.</h1>
                <p>
                  I&apos;m an undergraduate at the{" "}
                  <a
                    href="https://www.washington.edu/"
                    className="italic hover:underline text-gray-800"
                  >
                    University of Washington{" "}
                  </a>
                  studying{" "}
                  <a
                    className="italic hover:underline text-gray-800"
                    href="https://www.cs.washington.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Computer Science
                  </a>{" "}
                  and{" "}
                  <a
                    className="italic hover:underline text-gray-800"
                    href="https://www.ischool.uw.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Informatics
                  </a>
                  . My interests lie in software engineering, cybersecurity,
                  human-computer interaction, networks, and distributed systems.
                  I am pursuing a career in software engineering and I am
                  passionate about building software that makes a difference in
                  people&apos;s lives. I have experience in software
                  engineering, web development, and data science, UI/UX design
                  and I am always eager to learn new technologies and improve my
                  skills.
                </p>
                <p>
                  I was previously a Software Engineer Intern at the{" "}
                  <a
                    className="italic hover:underline text-gray-800"
                    href="https://alleninstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Allen Institute
                  </a>{" "}
                  where I worked in the Application development team,
                  spearheading the implementation and improvement of
                  accessibility for web applications for scientists and
                  researchers. I also worked on the development of features
                  that allows scientists to visualize and analyze large
                  datasets. Additionally, I was an Undergraduate Research
                  Assistant at the University of Washington{" "}
                  <a
                    href="https://faculty.washington.edu/ajko/lab"
                    className="italic hover:underline text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code and Cognition Lab led by Dr. Amy J. Ko
                  </a>
                  , where I worked on developing{" "}
                  <a
                    href="https://wordplay.dev/"
                    className="italic hover:underline text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &quot;WordPlay&quot;
                  </a>
                  , an accessible and inclusive programming language platform
                  for all backgrounds.
                </p>
                <p>
                  Currently, I am a Research Assistant at the{" "}
                  <a
                    href="https://faculty.washington.edu/ajko/lab"
                    className="italic hover:underline text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code and Cognition Lab
                  </a>
                  , continuing my work on{" "}
                  <a
                    href="https://wordplay.dev/"
                    className="italic hover:underline text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &quot;WordPlay&quot;
                  </a>
                  , and also working as a Software Developer at{" "}
                  <a
                    href="https://mesh.uw.edu"
                    className="italic hover:underline text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MESH
                  </a>
                  , developing professional public-facing websites for registered student organizations at UW. I also serve as a Research Assistant at DAIS, working on the &quot;iCare&quot; project, an AI-driven chatbot initiative under Dr. Dong Si.
                </p>
                <p className="font-medium text-gray-800">
                  I will be joining Amazon Web Services as a Software Development Engineer Intern in the Summer of 2025.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center sm:items-start gap-2 text-sm">
                <h1 className="text-2xl">Coursework</h1>
                <ul className="list-disc list-inside space-y-1">
                  <li>CSE 373: Data Structures and Algorithms</li>
                  <li>CSE 417: Algorithms and Computational Complexity</li>
                  <li>CSE 414: Introduction to Database Systems</li>
                  <li>CSE 415: Introduction to Artifical Intelligence</li>
                  <li>CSE 410: Programming Languages and Compilers</li>
                  <li>CSE 374: Intermediate Programming Concepts and Tools</li>
                  <li>CSE 461: Introduction to Computer Networks</li>
                  <li>INFO 340: Client-side Development</li>
                  <li>INFO 441: Server-side Development</li>
                  <li>
                    INFO 443: Software Architecture for Interactive Systems
                  </li>
                  <li>INFO 449: Mobile Development: iOS</li>
                  <li>INFO 360: Human-Computer Interaction Design Methods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
