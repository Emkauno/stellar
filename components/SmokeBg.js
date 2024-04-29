import { SmokeContainer } from '@/styles/SmokeBgStyles';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SmokeBg = () => {
  const containerRef = useRef(null);

  const geometry = new THREE.BoxGeometry(1,1,1)
  const material = new THREE.MeshBasicMaterial({
    color: 0x0099ff
  })
  const cube = new THREE.Mesh(geometry, material)



  useEffect(() => {
    if(typeof window !== 'undefined') {
      let w = window.innerWidth
      let h = window.innerHeight

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000)
      camera.position.z = 10
      scene.add(camera)

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(w, h)
      renderer.setClearColor(0xEEEEEE, 1)
      containerRef.current?.appendChild(renderer.domElement);

      const smokeParticles = []

      const loader = new THREE.TextureLoader()
      loader.crossOrigin = ''

      loader.load('/smoke.png', (texture) => {
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
            Math.random() * 500 - 250,
            Math.random() * 1000 - 100,
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
        h = window.innerHeight * 0.01;
        w = window.innerWidth

        document.documentElement.style.setProperty('--vh', `${h}px`);

        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w,h)
      }
      
      animate()
      window.addEventListener('resize', resize)

    }
    
  }, []);


  return <SmokeContainer ref={containerRef} />;
};

export default SmokeBg;