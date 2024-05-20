import { useGSAP } from '@gsap/react';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from "gsap";
import { useContext, useRef } from 'react';

export default function Home() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  useGSAP( () => {
    const targets = gsap.utils.toArray("p")
    gsap.fromTo(targets, {y: 20, opacity: 0}, {y: 0, opacity: 1, stagger: 0.20})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <div ref={container} className='flex h-[200vh]'>
      <div className="flex flex-col gap-6 h-[100vh] items-center justify-center w-full">
        <p className="text-[2vw]">Home</p>
        <p className="max-w-[50%] text-center">Welcome</p>
      </div>
    </div>
  );
}
