import { SmokeContainer } from '@/styles/SmokeBgStyles';
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const SmokeBg = () => {
  const containerRef = useRef(null);
  const [ background, setBackground ] = useState(false)
  useEffect(() => {
    if(typeof window !== 'undefined') {
      let w = window.innerWidth
      let h = window.innerHeight

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(80, w / h, 1, 100)
      camera.position.z = 10
      scene.add(camera)

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(w, h)
      renderer.setClearColor(0xFFFFFF, 1)
      containerRef.current?.appendChild(renderer.domElement);

      const smokeParticles = []

      const loader = new THREE.TextureLoader()
      loader.crossOrigin = ''

      loader.load('/smoke.png', (texture) => {
        setBackground(true)
        const smokeGeo = new THREE.PlaneGeometry(300,300)
        const smokeMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true
        })
        const NUM_OF_PARTICLES = 300
        for(let p = 0; p < NUM_OF_PARTICLES; p++){
          const particle = new THREE.Mesh(smokeGeo, smokeMaterial)
          particle.position.set(
            Math.random() * 500 - 250,
            Math.random() * 500 - 150,
            Math.random() * 400 - 50,
          )
          particle.rotation.z = Math.random() * 360
          scene.add(particle)
          smokeParticles.push(particle)
        }
      })

      const animate = () => {
        requestAnimationFrame(animate)

        smokeParticles.forEach((particle) => {
          particle.rotation.z += 0.000125
        })
        renderer.render(scene,camera)
      }
      
      const resize = () => {
        h = window.innerHeight
        w = window.innerWidth
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w,h)
      }
      
      animate()
      window.addEventListener('resize', resize)
    }
    
  }, []);


  return <SmokeContainer $background={background} ref={containerRef} />;
};

export default SmokeBg;