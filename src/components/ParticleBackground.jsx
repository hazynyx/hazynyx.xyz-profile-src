import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Particle Data
    const particleCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const targetSphere = new Float32Array(particleCount * 3);
    const targetCube = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random starting positions
      positions[i * 3] = (Math.random() - 0.5) * 1000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      // Sphere targets (Fibonacci sphere)
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const r = 250;
      targetSphere[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      targetSphere[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      targetSphere[i * 3 + 2] = r * Math.cos(phi);

      // Cube targets (randomly along the faces of a cube)
      targetCube[i * 3] = (Math.random() - 0.5) * 400;
      targetCube[i * 3 + 1] = (Math.random() - 0.5) * 400;
      targetCube[i * 3 + 2] = (Math.random() - 0.5) * 400;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x0096ff,
      size: 3,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Interaction vars
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - w / 2) * 0.1;
      mouseY = (e.clientY - h / 2) * 0.1;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Determine blend factor based on scroll
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollPercent = Math.min(Math.max(scrollY / docHeight, 0), 1); // 0 to 1

      const posAttribute = geometry.attributes.position;
      const posArray = posAttribute.array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Target shape blending
        const tx = THREE.MathUtils.lerp(targetSphere[idx], targetCube[idx], scrollPercent);
        const ty = THREE.MathUtils.lerp(targetSphere[idx+1], targetCube[idx+1], scrollPercent);
        const tz = THREE.MathUtils.lerp(targetSphere[idx+2], targetCube[idx+2], scrollPercent);

        // Current position lerping towards target
        posArray[idx] += (tx - posArray[idx]) * 0.05;
        posArray[idx+1] += (ty - posArray[idx+1]) * 0.05;
        posArray[idx+2] += (tz - posArray[idx+2]) * 0.05;

        // Wave motion
        posArray[idx+1] += Math.sin(time * 2 + posArray[idx]) * 0.5;
      }
      posAttribute.needsUpdate = true;

      // Mouse interaction (Repel camera slightly)
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate entire system
      particles.rotation.y = time * 0.1;
      particles.rotation.x = time * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
