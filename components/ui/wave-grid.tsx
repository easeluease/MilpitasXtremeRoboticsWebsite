"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WaveGridProps {
  /** Number of points along each axis (total points = density²) */
  density?: number;
  /** Size of the grid in world units */
  gridSize?: number;
  /** Strength of mouse-driven wave deformation */
  mouseStrength?: number;
  /** Radius of mouse influence */
  mouseRadius?: number;
  /** Speed of the ambient time-based wave */
  waveSpeed?: number;
  /** Amplitude of ambient waves */
  waveAmplitude?: number;
  /** Color of the points */
  pointColor?: string;
  /** Size of each point */
  pointSize?: number;
  /** Background color (use 'transparent' for no background) */
  backgroundColor?: string;
  /** className for the container div */
  className?: string;
}

export default function WaveGrid({
  density = 120,
  gridSize = 100,
  mouseStrength = 8,
  mouseRadius = 20,
  waveSpeed = 0.001,
  waveAmplitude = 2,
  pointColor = "#b2c4ff",
  pointSize = 0.15,
  backgroundColor = "transparent",
  className = "",
}: WaveGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // === Scene ===
    const scene = new THREE.Scene();
    if (backgroundColor !== "transparent") {
      scene.background = new THREE.Color(backgroundColor);
    }

    // === Camera ===
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 50, 50);
    camera.lookAt(0, 50, 0);

    // === Renderer ===
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: backgroundColor === "transparent",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // === Build point grid ===
    const geometry = new THREE.BufferGeometry();
    const totalPoints = density * density;
    const positions = new Float32Array(totalPoints * 3);
    const originalPositions = new Float32Array(totalPoints * 3);

    const half = gridSize / 2;
    const step = gridSize / (density - 1);

    let idx = 0;
    for (let i = 0; i < density; i++) {
      for (let j = 0; j < density; j++) {
        const x = -half + i * step;
        const y = -half + j * step;
        const z = 0;

        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = z;

        originalPositions[idx] = x;
        originalPositions[idx + 1] = y;
        originalPositions[idx + 2] = z;

        idx += 3;
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // === Material ===
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(pointColor),
      size: pointSize,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // === Points object ===
    const points = new THREE.Points(geometry, material);
    points.rotation.x = -Math.PI / 3; // tilt for perspective
    scene.add(points);

    // === Mouse tracking (in world coordinates on grid plane) ===
    const mouse = new THREE.Vector2(9999, 9999);
    const mouseWorld = new THREE.Vector3(9999, 9999, 0);
    const raycaster = new THREE.Raycaster();
    const planeIntersect = new THREE.Vector3();
    const gridPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    // Apply same rotation as the points
    const rotMatrix = new THREE.Matrix4().makeRotationX(-Math.PI / 3);
    const inverseRotMatrix = new THREE.Matrix4().copy(rotMatrix).invert();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Plane in rotated grid space (z=0 in local space => transformed plane)
      const worldPlane = new THREE.Plane(
        new THREE.Vector3(0, 0, 1).applyMatrix4(rotMatrix),
        0
      );

      if (raycaster.ray.intersectPlane(worldPlane, planeIntersect)) {
        // Convert from world to local grid space
        const localPoint = planeIntersect.clone().applyMatrix4(inverseRotMatrix);
        mouseWorld.copy(localPoint);
      }
    };

    const handleMouseLeave = () => {
      mouseWorld.set(9999, 9999, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // === Resize handler ===
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // === Animation loop ===
    let animationId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) * waveSpeed;
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      const mx = mouseWorld.x;
      const my = mouseWorld.y;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      for (let i = 0; i < totalPoints; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];

        // Ambient time-based wave
        const ambient =
          Math.sin(ox * 0.15 + elapsed * 2) * waveAmplitude +
          Math.cos(oy * 0.15 + elapsed * 1.5) * waveAmplitude;

        // Mouse-driven radial wave
        const dx = ox - mx;
        const dy = oy - my;
        const distSq = dx * dx + dy * dy;

        let mouseWave = 0;
        if (distSq < mouseRadiusSq) {
          const dist = Math.sqrt(distSq);
          const falloff = 1 - dist / mouseRadius;
          mouseWave =
            Math.sin(dist * 0.5 - elapsed * 8) *
            mouseStrength *
            falloff *
            falloff * falloff;
        }

        arr[i3 + 2] = ambient + mouseWave;
      }

      posAttr.needsUpdate = true;

      // Subtle camera/group sway
      points.rotation.z = Math.sin(elapsed * 0.5) * 0.02;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // === Cleanup ===
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mouseleave", handleMouseLeave);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    density,
    gridSize,
    mouseStrength,
    mouseRadius,
    waveSpeed,
    waveAmplitude,
    pointColor,
    pointSize,
    backgroundColor,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}