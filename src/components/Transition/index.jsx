import { useState, useContext } from "react"
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline } = useContext(TransitionContext);
    const { contextSafe } = useGSAP(); 

    const exit = contextSafe( () => {
        timeline.play().then( () => {
            window.scrollTo(0, 0)
            setDisplayChildren(children);
            timeline.pause().clear();
        })
    })
    useGSAP(() => {
        if (children.key !== displayChildren.key) {
            exit();            
        }
    }, [children]) 

    return (
        <div className="bg-white">
            {displayChildren}
        </div>
    )
}