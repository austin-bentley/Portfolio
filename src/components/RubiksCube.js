import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function isDesktop(width) {
  return width >= 1024;
}

function RubiksCube() {
  const ThreeContainer = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const container = ThreeContainer.current;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    if (isDesktop(window.innerWidth)) {
      renderer.setSize(700, 350);
    } else {
      renderer.setSize(window.innerWidth - 32, window.innerHeight - 32);
    }
    container.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    if (isDesktop(window.innerWidth)) {
      camera.position.z = 1.5;
    } else {
      camera.position.z = 2.5;
    }
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  });

  return (
    <div className="cube-container">
      <div className="cube" ref={ThreeContainer}></div>
    </div>
  );
}

export default RubiksCube;
