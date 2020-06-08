import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const cubes = [
  {
    position: { x: -0.5, y: 0.5, z: 0.5 },
    textSide: [
      { side: 1, text: "AWS Lambda" },
      { side: 2, text: "API Gateway" },
      { side: 4, text: "Javascript" },
    ],
  },
  {
    position: { x: -0.5, y: -0.5, z: 0.5 },
    textSide: [
      { side: 1, text: "CSS" },
      { side: 3, text: "SCSS" },
      { side: 4, text: "Webpack" },
    ],
  },
  {
    position: { x: 0.5, y: 0.5, z: 0.5 },
    textSide: [
      { side: 0, text: "React" },
      { side: 2, text: "Handlebars" },
      { side: 4, text: "Elixir" },
    ],
  },
  {
    position: { x: 0.5, y: -0.5, z: 0.5 },
    textSide: [
      { side: 0, text: "Phoenix LV" },
      { side: 3, text: "Phoenix" },
      { side: 4, text: "Postgres" },
    ],
  },
  {
    position: { x: 0.5, y: -0.5, z: -0.5 },
    textSide: [
      { side: 0, text: "Karma" },
      { side: 3, text: "Chai" },
      { side: 5, text: "Jasmine" },
    ],
  },
  {
    position: { x: -0.5, y: -0.5, z: -0.5 },
    textSide: [
      { side: 1, text: "Angular (1)" },
      { side: 3, text: "Mocha" },
      { side: 5, text: "Jenkins" },
    ],
  },
  {
    position: { x: 0.5, y: 0.5, z: -0.5 },
    textSide: [
      { side: 0, text: "CircleCI" },
      { side: 2, text: "Hapi" },
      { side: 5, text: "Node" },
    ],
  },
  {
    position: { x: -0.5, y: 0.5, z: -0.5 },
    textSide: [
      { side: 1, text: "Material UI" },
      { side: 2, text: "Functional" },
      { side: 5, text: "GIT" },
    ],
  },
];

function isDesktop(width) {
  return width >= 1024;
}

function setCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  if (isDesktop(window.innerWidth)) {
    camera.position.set(0, 1, 3);
  } else {
    camera.position.set(0, 2, 4);
  }
  return camera;
}

function setRendererSize() {
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  if (isDesktop(window.innerWidth)) {
    renderer.setSize(700, 350);
  } else {
    renderer.setSize(200, 400);
  }
  return renderer;
}

function setControls(renderer, camera) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 3;
  return controls;
}

function getText(index, cube) {
  let text = "";
  for (let i = 0; i < cube.textSide.length; i += 1) {
    if (cube.textSide[i].side === index) {
      text = cube.textSide[i].text;
      break;
    }
  }
  return text;
}

function makeCubeMaterial(cube) {
  const materialArray = [];
  for (let i = 0; i < 6; i += 1) {
    const textContainer = document.createElement("canvas");
    const text = textContainer.getContext("2d");
    const textContainerWidth = textContainer.width / 2;
    const textContainerHeight = textContainer.height / 2;
    text.fillStyle = "white";
    text.textAlign = "center";
    text.fillRect(0, 0, 300, 150);
    text.fillStyle = "black";
    text.font = "30pt Roboto";

    text.fillText(getText(i, cube), textContainerWidth, textContainerHeight);

    materialArray.push(
      new THREE.MeshBasicMaterial({
        map: new THREE.Texture(textContainer),
        opacity: 0.7,
        transparent: true,
      })
    );
  }
  return materialArray;
}

function RubiksCube() {
  const ThreeContainer = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const container = ThreeContainer.current;
    const camera = setCamera();
    const renderer = setRendererSize();
    const controls = setControls(renderer, camera);

    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    cubes.forEach((cube) => {
      const materials = makeCubeMaterial(cube);

      materials.map((material) => {
        material.map.needsUpdate = true;
      });

      const newCube = new THREE.Mesh(geometry, materials);

      const edges = new THREE.EdgesGeometry(geometry);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x000000 })
      );

      line.position.set(cube.position.x, cube.position.y, cube.position.z);
      newCube.position.set(cube.position.x, cube.position.y, cube.position.z);

      scene.add(line);
      scene.add(newCube);
    });

    const animate = function () {
      requestAnimationFrame(animate);

      controls.update();
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
