import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0015);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 2000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    
    // Arrays for different states
    const currentPos = new Float32Array(particleCount * 3);
    const cloudPos = new Float32Array(particleCount * 3);
    const gridPos = new Float32Array(particleCount * 3);
    const wavePos = new Float32Array(particleCount * 3);

    // Generate formations
    const gridSize = Math.ceil(Math.cbrt(particleCount));
    const gridStep = 40;
    const gridOffset = (gridSize * gridStep) / 2;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      // 1. Cloud (Spherical volume)
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 300 * Math.cbrt(Math.random());
      
      cloudPos[idx] = r * Math.sin(phi) * Math.cos(theta);
      cloudPos[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      cloudPos[idx + 2] = r * Math.cos(phi);

      // 2. Grid (3D Matrix - Systems/OS)
      const gx = i % gridSize;
      const gy = Math.floor((i / gridSize)) % gridSize;
      const gz = Math.floor(i / (gridSize * gridSize));
      
      gridPos[idx] = (gx * gridStep) - gridOffset;
      gridPos[idx + 1] = (gy * gridStep) - gridOffset;
      gridPos[idx + 2] = (gz * gridStep) - gridOffset;

      // 3. Wave (Twisted Ribbon - Abstract/Hardware)
      const t = i / particleCount;
      const angle = t * Math.PI * 20; 
      const radius = 200 + Math.sin(t * Math.PI * 4) * 100;
      
      wavePos[idx] = Math.cos(angle) * radius;
      wavePos[idx + 1] = (t - 0.5) * 1000;
      wavePos[idx + 2] = Math.sin(angle) * radius;

      // Initialize current to cloud
      currentPos[idx] = cloudPos[idx];
      currentPos[idx + 1] = cloudPos[idx + 1];
      currentPos[idx + 2] = cloudPos[idx + 2];
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPos, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Interaction vars
    let mouseX = 0;
    let mouseY = 0;
    
    const camTarget = new THREE.Vector3(0, 0, 600);

    const onMouseMove = (e) => {
      mouseX = (e.clientX / w - 0.5) * 2;
      mouseY = (e.clientY / h - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Dynamically calculate scroll to fix initial load bugs and dynamic height changes
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollPercent = Math.min(Math.max(window.scrollY / docHeight, 0), 1);

      const posAttribute = geometry.attributes.position;
      const posArray = posAttribute.array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        let tx, ty, tz;
        
        if (scrollPercent < 0.3) {
          // Mostly Cloud, start transitioning to Grid
          const progress = Math.max(0, (scrollPercent - 0.15) * (1 / 0.15)); // 0 to 1 between 0.15 and 0.3
          tx = THREE.MathUtils.lerp(cloudPos[idx], gridPos[idx], progress);
          ty = THREE.MathUtils.lerp(cloudPos[idx+1], gridPos[idx+1], progress);
          tz = THREE.MathUtils.lerp(cloudPos[idx+2], gridPos[idx+2], progress);
          
          tx += Math.sin(time + i) * 0.5 * (1 - progress);
          ty += Math.cos(time + i) * 0.5 * (1 - progress);
        } else if (scrollPercent < 0.7) {
          // Mostly Grid, start transitioning to Wave
          const progress = Math.max(0, (scrollPercent - 0.55) * (1 / 0.15)); // 0 to 1 between 0.55 and 0.7
          tx = THREE.MathUtils.lerp(gridPos[idx], wavePos[idx], progress);
          ty = THREE.MathUtils.lerp(gridPos[idx+1], wavePos[idx+1], progress);
          tz = THREE.MathUtils.lerp(gridPos[idx+2], wavePos[idx+2], progress);
          
          ty += Math.sin(time * 2 + gridPos[idx] * 0.01) * 2 * (1 - progress);
        } else {
          // Wave
          const waveT = (i / particleCount) + time * 0.1;
          const angle = waveT * Math.PI * 20;
          const radius = 200 + Math.sin(waveT * Math.PI * 4) * 100;
          
          tx = Math.cos(angle) * radius;
          ty = wavePos[idx+1];
          tz = Math.sin(angle) * radius;
        }

        // Mouse repulsion
        const dx = tx - (mouseX * 500);
        const dy = ty - (-mouseY * 500);
        const dist = Math.sqrt(dx*dx + dy*dy);
        const repelRadius = 200;
        
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          tx += (dx / dist) * force * 100;
          ty += (dy / dist) * force * 100;
        }

        // Smooth interpolation
        posArray[idx] += (tx - posArray[idx]) * 0.08;
        posArray[idx+1] += (ty - posArray[idx+1]) * 0.08;
        posArray[idx+2] += (tz - posArray[idx+2]) * 0.08;
      }
      posAttribute.needsUpdate = true;

      // Camera & System rotation
      const targetRotY = scrollPercent * Math.PI;
      const targetRotX = scrollPercent * Math.PI * 0.5;
      
      particles.rotation.y += (targetRotY - particles.rotation.y) * 0.05;
      particles.rotation.x += (targetRotX - particles.rotation.x) * 0.05;

      camTarget.x = mouseX * 200;
      camTarget.y = -mouseY * 200;
      
      let targetZ = 600;
      if (scrollPercent > 0.3 && scrollPercent < 0.7) {
        targetZ = 350; 
      } else if (scrollPercent >= 0.7) {
        targetZ = 800; 
      }
      camTarget.z = targetZ;

      camera.position.x += (camTarget.x - camera.position.x) * 0.05;
      camera.position.y += (camTarget.y - camera.position.y) * 0.05;
      camera.position.z += (camTarget.z - camera.position.z) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
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
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
