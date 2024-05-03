import React, { useEffect, useState } from "react";
// import Particles from "react-particles-js";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Canvas=(props)=> {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
    init && <Particles
        id={props.id}
        particlesLoaded={particlesLoaded}
        
        options={{
          fullScreen:false,
          particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#ffffff",
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true,
                },
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: {
                    min: 1,
                    max: 3,
                },
            },
            links: {
                enable: true,
                distance: 100,
                color: "#ffffff",
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2.5,
            },
            life: {
                duration: {
                    sync: false,
                    value: 3,
                },
                count: 0,
                delay: {
                    value: {
                        min: 1,
                        max: 2,
                    },
                },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                repulse: {
                    distance: 200,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        background: {
            color: "#222222",
        },
          
        }}
    />
    

);
};


export default Canvas;
