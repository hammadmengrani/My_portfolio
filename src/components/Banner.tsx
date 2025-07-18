"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Github, Linkedin, Mail } from "lucide-react";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
}

const ThreeJSBanner: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current; // ✅ Define here so it's accessible below

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Neural Network Particles
    const particleCount = 50;
    const particles: Particle[] = [];
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
    });

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        connections: [],
      };
      particles.push(particle);

      const mesh = new THREE.Mesh(particleGeometry, particleMaterial);
      mesh.position.copy(particle.position);
      scene.add(mesh);
    }

    // Connection lines
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
    });

    const connections: THREE.Line[] = [];

    // Create connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = particles[i].position.distanceTo(
          particles[j].position
        );
        if (distance < 2) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            particles[i].position,
            particles[j].position,
          ]);
          const line = new THREE.Line(geometry, connectionMaterial);
          connections.push(line);
          scene.add(line);
          particles[i].connections.push(j);
        }
      }
    }

    // Floating geometric shapes
    const shapes: THREE.Mesh[] = [];

    // AI Brain-like structure
    const brainGeometry = new THREE.IcosahedronGeometry(0.8, 2);
    const brainMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const brainMesh = new THREE.Mesh(brainGeometry, brainMaterial);
    brainMesh.position.set(-2, 1, 0);
    scene.add(brainMesh);
    shapes.push(brainMesh);

    // Code cube
    const codeGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const codeMaterial = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });
    const codeMesh = new THREE.Mesh(codeGeometry, codeMaterial);
    codeMesh.position.set(2, -1, 0);
    scene.add(codeMesh);
    shapes.push(codeMesh);

    // AI Torus
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 8, 16);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(0, -2, 1);
    scene.add(torusMesh);
    shapes.push(torusMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Animate particles
      particles.forEach((particle) => {
        particle.position.add(particle.velocity);

        // Boundary check
        if (Math.abs(particle.position.x) > 5) particle.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 3) particle.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 2) particle.velocity.z *= -1;

        // Update mesh position
        const mesh = scene.children.find(
          (child: THREE.Object3D) =>
            child instanceof THREE.Mesh &&
            child.geometry === particleGeometry &&
            child.position.distanceTo(particle.position) < 0.1
        );
        if (mesh) {
          mesh.position.copy(particle.position);
        }
      });

      // Update connections
      connections.forEach((connection) => {
        // const positions = connection.geometry.attributes.position.array as Float32Array;
        connection.geometry.attributes.position.needsUpdate = true;
      });

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      // Animate camera
      camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
      camera.position.y = Math.cos(Date.now() * 0.0007) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        currentMount.removeChild(renderer.domElement); // ✅ Safe usage
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6  mx-auto">
          {/* Main Title */}
          <div className="">
            <h1
              className={`text-4xl md:text-8xl md:text-nowrap font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Hammad Mengrani
            </h1>
            <div
              className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* <Brain className="w-6 h-6 text-cyan-400" />
              <Code className="w-6 h-6 text-blue-400" /> */}
              <p className="text-base md:text-3xl text-gray-300 font-light py-3">
                {/* Combining AI with modern web and mobile technologies to create smarter, more adaptive solutions.
                I specialize in full stack development powered by machine learning and automation. */}
                Crafting intelligent digital solutions using AI and full stack
                development.
              </p>
            </div>
          </div>

          {/* Skills Tags */}
          {/* <div
            className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              "AI/ML",
              "Next.js",
              "React",
              "TypeScript",
              "Python",
              "TensorFlow",
              "Node.js",
              "Wordpress",
              "FastAPI",
              "LLM",
              "LangChain",
              "n8n",
            ].map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 ${
                  index % 3 === 0
                    ? "text-cyan-400"
                    : index % 3 === 1
                    ? "text-blue-400"
                    : "text-purple-400"
                }`}
              >
                {skill}
              </span>
            ))}
          </div> */}

          {/* Social Links */}
          <div
            className={`flex justify-center gap-6 transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://github.com/hammadmengrani"
              className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/hammad-mengrani-00896b1b4/"
              className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="mailto:hammadmengrani05@gmail.com"
              className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeJSBanner;
