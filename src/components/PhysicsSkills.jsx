import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const skills = [
  'HTML/CSS/JS', 'Git', 'Python', 'C/C++', 'Arduino', 'ESP32', 
  'Frontend', 'APIs', 'IndexedDB', 'Encryption', 'Linux', 'Problem Solving'
];

const PhysicsSkills = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width = 400;
    const height = 400;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const wallOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
    Composite.add(world, [
      Bodies.rectangle(width/2, height + 25, width, 50, wallOptions),
      Bodies.rectangle(-25, height/2, 50, height, wallOptions),
      Bodies.rectangle(width + 25, height/2, 50, height, wallOptions),
    ]);

    const balls = skills.map((skill, index) => {
      const radius = 35 + Math.random() * 10;
      const x = Math.random() * (width - 100) + 50;
      const y = -100 - (index * 50);
      
      const ball = Bodies.circle(x, y, radius, {
        restitution: 0.8,
        friction: 0.05,
        render: {
          fillStyle: '#0a0a0f',
          strokeStyle: '#0096ff',
          lineWidth: 2
        }
      });
      ball.plugin = { skill };
      return ball;
    });

    Composite.add(world, balls);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      context.font = 'bold 12px Inter';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#ffffff';

      balls.forEach(ball => {
        const { x, y } = ball.position;
        context.save();
        context.translate(x, y);
        context.rotate(ball.angle);
        context.fillText(ball.plugin.skill, 0, 0);
        context.restore();
      });
    });

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div 
      ref={sceneRef} 
      className="hover-target"
      style={{ 
        width: '400px', 
        height: '400px', 
        borderRadius: '20px', 
        overflow: 'hidden',
        border: '1px solid rgba(0, 150, 255, 0.4)',
        background: 'rgba(0,0,0,0.5)',
        boxShadow: 'inset 0 0 30px rgba(0, 150, 255, 0.1)'
      }} 
    />
  );
};

export default PhysicsSkills;
