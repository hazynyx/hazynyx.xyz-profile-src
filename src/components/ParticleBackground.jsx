import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0012);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 3000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 5000;
    const geometry = new THREE.BufferGeometry();
    
    const currentPos = new Float32Array(particleCount * 3);
    
    // Target Arrays
    const posCloud = new Float32Array(particleCount * 3);
    const posGrid = new Float32Array(particleCount * 3);
    const posScaffold = new Float32Array(particleCount * 3);
    const posClusters = new Float32Array(particleCount * 3);
    const posBreak = new Float32Array(particleCount * 3);
    const posTorus = new Float32Array(particleCount * 3);
    const posGalaxy = new Float32Array(particleCount * 3);

    const clusterCenters = [];
    for(let c=0; c<8; c++) {
      clusterCenters.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 800
      });
    }

    const gridSize = Math.ceil(Math.cbrt(particleCount));
    const gridStep = 35;
    const gridOffset = (gridSize * gridStep) / 2;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      // 1. Cloud (Home)
      let u = Math.random();
      let v = Math.random();
      let theta = 2 * Math.PI * u;
      let phi = Math.acos(2 * v - 1);
      let r = 350 * Math.cbrt(Math.random());
      posCloud[idx] = r * Math.sin(phi) * Math.cos(theta);
      posCloud[idx+1] = r * Math.sin(phi) * Math.sin(theta);
      posCloud[idx+2] = r * Math.cos(phi);

      // 2. Grid (Projects)
      const gx = i % gridSize;
      const gy = Math.floor((i / gridSize)) % gridSize;
      const gz = Math.floor(i / (gridSize * gridSize));
      posGrid[idx] = (gx * gridStep) - gridOffset;
      posGrid[idx+1] = (gy * gridStep) - gridOffset;
      posGrid[idx+2] = (gz * gridStep) - gridOffset;

      // 3. Scaffold (Build) - Concentrated on the edges of a cube
      const edge = Math.floor(Math.random() * 12);
      const span = (Math.random() - 0.5) * 500;
      const s = 250;
      let sx, sy, sz;
      if (edge === 0) { sx = span; sy = s; sz = s; }
      else if (edge === 1) { sx = span; sy = s; sz = -s; }
      else if (edge === 2) { sx = span; sy = -s; sz = s; }
      else if (edge === 3) { sx = span; sy = -s; sz = -s; }
      else if (edge === 4) { sx = s; sy = span; sz = s; }
      else if (edge === 5) { sx = s; sy = span; sz = -s; }
      else if (edge === 6) { sx = -s; sy = span; sz = s; }
      else if (edge === 7) { sx = -s; sy = span; sz = -s; }
      else if (edge === 8) { sx = s; sy = s; sz = span; }
      else if (edge === 9) { sx = s; sy = -s; sz = span; }
      else if (edge === 10) { sx = -s; sy = s; sz = span; }
      else { sx = -s; sy = -s; sz = span; }
      posScaffold[idx] = sx + (Math.random()-0.5)*30;
      posScaffold[idx+1] = sy + (Math.random()-0.5)*30;
      posScaffold[idx+2] = sz + (Math.random()-0.5)*30;

      // 4. Clusters (Systems)
      const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
      posClusters[idx] = cluster.x + (Math.random() - 0.5) * 150;
      posClusters[idx+1] = cluster.y + (Math.random() - 0.5) * 150;
      posClusters[idx+2] = cluster.z + (Math.random() - 0.5) * 150;

      // 5. Break (Explosion)
      posBreak[idx] = (Math.random() - 0.5) * 2500;
      posBreak[idx+1] = (Math.random() - 0.5) * 2500;
      posBreak[idx+2] = (Math.random() - 0.5) * 2500;

      // 6. Learn (Torus)
      const tU = Math.random() * Math.PI * 2;
      const tV = Math.random() * Math.PI * 2;
      const tR = 250;
      const tr = 80;
      posTorus[idx] = (tR + tr * Math.cos(tV)) * Math.cos(tU);
      posTorus[idx+1] = (tR + tr * Math.cos(tV)) * Math.sin(tU);
      posTorus[idx+2] = tr * Math.sin(tV);

      // 7. Next (Galaxy)
      const gR = Math.random() * 800;
      const gTheta = gR * 0.02 + Math.random() * Math.PI * 2;
      posGalaxy[idx] = gR * Math.cos(gTheta);
      posGalaxy[idx+1] = (Math.random() - 0.5) * 40;
      posGalaxy[idx+2] = gR * Math.sin(gTheta);

      // Init
      currentPos[idx] = posCloud[idx];
      currentPos[idx+1] = posCloud[idx+1];
      currentPos[idx+2] = posCloud[idx+2];
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

      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollPercent = Math.min(Math.max(window.scrollY / docHeight, 0), 1);

      const posAttribute = geometry.attributes.position;
      const posArray = posAttribute.array;

      const numStates = 7;
      const segment = 1 / (numStates - 1); 
      
      const currentStateIdx = Math.floor(scrollPercent / segment);
      const progress = (scrollPercent % segment) / segment;

      const states = [posCloud, posGrid, posScaffold, posClusters, posBreak, posTorus, posGalaxy];
      
      const startState = states[Math.min(currentStateIdx, numStates - 1)];
      const endState = states[Math.min(currentStateIdx + 1, numStates - 1)];

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        let tx = THREE.MathUtils.lerp(startState[idx], endState[idx], progress);
        let ty = THREE.MathUtils.lerp(startState[idx+1], endState[idx+1], progress);
        let tz = THREE.MathUtils.lerp(startState[idx+2], endState[idx+2], progress);

        // Add subtle continuous motion based on state
        if (startState === posCloud) {
          tx += Math.sin(time + i) * 0.5;
          ty += Math.cos(time + i) * 0.5;
        } else if (startState === posGrid || endState === posGrid) {
          ty += Math.sin(time * 2 + posGrid[idx] * 0.01) * 1.5;
        } else if (startState === posScaffold || endState === posScaffold) {
          const pulse = Math.sin(time * 4) * 0.1 + 0.9;
          tx *= pulse; ty *= pulse; tz *= pulse;
        } else if (startState === posClusters || endState === posClusters) {
          tx += Math.sin(time * 3 + i) * 2;
          ty += Math.cos(time * 3 + i) * 2;
        } else if (startState === posGalaxy || endState === posGalaxy) {
          const angle = time * 0.2;
          const originalX = tx;
          tx = originalX * Math.cos(angle) - tz * Math.sin(angle);
          tz = originalX * Math.sin(angle) + tz * Math.cos(angle);
        }

        // Mouse repulsion
        const dx = tx - (mouseX * 500);
        const dy = ty - (-mouseY * 500);
        const dist = Math.sqrt(dx*dx + dy*dy);
        const repelRadius = 250;
        
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          tx += (dx / dist) * force * 150;
          ty += (dy / dist) * force * 150;
        }

        // Smooth interpolation
        posArray[idx] += (tx - posArray[idx]) * 0.08;
        posArray[idx+1] += (ty - posArray[idx+1]) * 0.08;
        posArray[idx+2] += (tz - posArray[idx+2]) * 0.08;
      }
      posAttribute.needsUpdate = true;

      // Camera & System rotation
      particles.rotation.y = time * 0.05 + scrollPercent * Math.PI * 2;
      particles.rotation.x = scrollPercent * Math.PI * 0.5;

      camTarget.x = mouseX * 300;
      camTarget.y = -mouseY * 300;
      
      // Dynamic Camera Z based on state
      let targetZ = 600;
      if (currentStateIdx === 1) targetZ = 450;
      else if (currentStateIdx === 2) targetZ = 600;
      else if (currentStateIdx === 3) targetZ = 800;
      else if (currentStateIdx === 4) targetZ = 1200;
      else if (currentStateIdx === 5) targetZ = 500;
      else if (currentStateIdx === 6) targetZ = 700;
      
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
