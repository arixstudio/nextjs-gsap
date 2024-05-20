import React, { useRef, useContext } from 'react'
import { TransitionContext } from '@/context/TransitionContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Index() {

  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  useGSAP( () => {
    const targets = gsap.utils.toArray("p")
    gsap.fromTo(targets, {scale: 0.80, opacity: 0}, {scale: 1, opacity: 1, stagger: 0.20})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <div ref={container} className='flex h-[200vh]'>
      <div className="flex flex-col gap-6 h-[100vh] items-center justify-center w-full">
        <p className="text-[2vw]">Sample page</p>
        <p className="max-w-[50%] text-center">Some content</p>
      </div>
    </div>
  )
}