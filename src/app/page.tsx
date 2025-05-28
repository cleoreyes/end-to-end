import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1>About</h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div>
              <p>Hey there, my name is Cleo Reyes</p>
              <p>I&apos;m an undergraduate at the Univeristy of Washington studying Computer Science and Informatics.
                My interests lie in software engineering, cybersecurity, human-computer interaction, networks, and distributed systems.
                I am pursuing a career in software engineering and I am passionate about building software that makes a difference in people&apos;s lives. 
                I have experience in software engineering, web development, and data science, UI/UX design and I am always eager to learn new technologies and improve my skills.
              </p>  
            </div>
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQFLCUblM1vkKQ/profile-displayphoto-shrink_400_400/B56ZYzW9fYHoAo-/0/1744618379910?e=1753920000&v=beta&t=R8V6opQTy6Z6aW3q3bjP7T2gbfT5hvjEecGpWIKSDJI"
              alt="Cleo Reyes"
              width={200}
              height={600}
              className="rounded-sm"
            />
          </div>
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
