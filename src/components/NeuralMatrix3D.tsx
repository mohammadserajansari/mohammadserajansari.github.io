import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Activity, Cpu, Sparkles, Orbit, Radio, Zap } from 'lucide-react';

export type SceneMode = 'synapse' | 'quantum' | 'mri' | 'swarm';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  label?: string;
  type: 'core' | 'synapse' | 'agent' | 'molecule';
  radius: number;
  pulsePhase: number;
}

interface PulsePacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

interface Shockwave {
  radius: number;
  maxRadius: number;
  alpha: number;
}

export function NeuralMatrix3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<SceneMode>('synapse');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [fps, setFps] = useState<number>(60);
  const [pulseCount, setPulseCount] = useState<number>(0);
  const hoveredNodeRef = useRef<string | null>(null);
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const requestRenderOnceRef = useRef<(() => void) | null>(null);

  // Rotation angles & interaction state (tuned for high-speed dynamic sci-fi action)
  const rotRef = useRef({ x: 0.2, y: 0.4, vx: 0.007, vy: 0.014 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const shockwavesRef = useRef<Shockwave[]>([]);
  const pulsesRef = useRef<PulsePacket[]>([]);
  const nodesRef = useRef<Node3D[]>([]);

  // Generate nodes based on mode
  const initNodes = useCallback((currentMode: SceneMode) => {
    const nodes: Node3D[] = [];
    const count = currentMode === 'swarm' ? 36 : currentMode === 'quantum' ? 48 : currentMode === 'mri' ? 64 : 52;
    const radius = 195;

    if (currentMode === 'synapse') {
      // Golden spiral sphere for neural network attention core
      const phi = Math.PI * (3 - Math.sqrt(5));
      const labels = [
        'LangChain', 'Llama 3.3', 'Claude 3.5', 'PGVector', 'BioBERT', 
        'FastAPI', 'AWS Bedrock', 'PyTorch', 'CrewAI', 'Qdrant',
        'Snowflake', 'LangGraph', 'Docker', 'RAGAS', 'LangSmith',
        'Attention Head α', 'Vector Index', 'Tool Router', 'Embeddings', 'GNN Layer'
      ];

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        const r = radius * (0.85 + Math.random() * 0.3);

        nodes.push({
          x: x * r,
          y: y * r,
          z: z * r,
          baseX: x * r,
          baseY: y * r,
          baseZ: z * r,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.2,
          label: i < labels.length ? labels[i] : undefined,
          type: i < 5 ? 'core' : 'synapse',
          radius: i < 5 ? 4.5 : 2.5 + Math.random() * 1.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    } else if (currentMode === 'quantum') {
      // Molecular lattice (GNN representation)
      const quantumLabels = [
        'QM Descriptors', 'LogP Predictor', 'R² = 0.959', 'PyTorch Geometric', 
        'RDKit Graph', 'QMPSA Feature', 'Solvation ΔG', 'ExtraTrees', 
        'DeepChem', 'Partition Coeff', 'Graph Conv', 'Atom Node C', 
        'Atom Node N', 'Bond Edge', 'JCTC Paper', 'IIIT-Delhi Lab'
      ];
      for (let i = 0; i < count; i++) {
        const u = (Math.random() - 0.5) * 2;
        const v = (Math.random() - 0.5) * 2;
        const w = (Math.random() - 0.5) * 2;
        const len = Math.sqrt(u * u + v * v + w * w) || 1;
        const r = radius * (0.4 + (i / count) * 0.75);

        nodes.push({
          x: (u / len) * r,
          y: (v / len) * r,
          z: (w / len) * r,
          baseX: (u / len) * r,
          baseY: (v / len) * r,
          baseZ: (w / len) * r,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.3,
          label: i < quantumLabels.length ? quantumLabels[i] : undefined,
          type: 'molecule',
          radius: 3 + Math.random() * 2.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    } else if (currentMode === 'mri') {
      // 3D Volumetric Voxel slices (Alzheimer's MRI model)
      const layers = 4;
      const perLayer = Math.floor(count / layers);
      const mriLabels = [
        'Volumetric 3D CNN', 'Coronal 80.5%', 'Sagittal 78.1%', 'Axial 71.0%',
        'Ensemble 75%', 'Alzheimer Voxel', 'MRI .nii Tensor', 'YOLOv8n Multi-view',
        'IIIT-D Thesis', 'Hippocampus ROI', '+64% Accuracy', 'Biomedical 3D'
      ];
      let labelIdx = 0;

      for (let l = 0; l < layers; l++) {
        const layerZ = ((l / (layers - 1)) - 0.5) * radius * 1.5;
        for (let i = 0; i < perLayer; i++) {
          const angle = (i / perLayer) * Math.PI * 2;
          const r = radius * (0.35 + 0.65 * ((i % 3) / 2));
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          nodes.push({
            x,
            y,
            z: layerZ,
            baseX: x,
            baseY: y,
            baseZ: layerZ,
            vx: 0,
            vy: 0,
            vz: 0,
            label: labelIdx < mriLabels.length ? mriLabels[labelIdx++] : undefined,
            type: 'synapse',
            radius: 3,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    } else {
      // Swarm mode: Autonomous Agent Fleet (CrewAI + LangGraph)
      const agentRoles = [
        'Orchestrator Agent', 'RAG Retrieval Agent', 'FastAPI Execution Agent',
        'Clinical Matcher Agent', 'Evaluation Agent (RAGAS)', 'Voice Stream Agent (Deepgram)',
        'Bedrock Claude 3.5', 'Snowflake Sync Agent'
      ];
      for (let i = 0; i < count; i++) {
        const ring = i % 3;
        const ringRadius = radius * (0.5 + ring * 0.35);
        const angle = (i / count) * Math.PI * 2 * 3;
        const x = Math.cos(angle) * ringRadius;
        const y = Math.sin(angle) * ringRadius * 0.4;
        const z = Math.sin(angle * 2) * 60;

        nodes.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.4,
          label: i < agentRoles.length ? agentRoles[i] : undefined,
          type: 'agent',
          radius: i < agentRoles.length ? 5 : 2.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    nodesRef.current = nodes;
  }, []);

  // Trigger pulse wave from center
  const triggerPulse = useCallback(() => {
    shockwavesRef.current.push({
      radius: 10,
      maxRadius: 280,
      alpha: 1.0,
    });
    setPulseCount((prev) => prev + 1);

    // Spawn 10 new high-speed pulse packets across random connected nodes
    const nodes = nodesRef.current;
    if (nodes.length > 5) {
      for (let i = 0; i < 10; i++) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = (from + Math.floor(Math.random() * 5) + 1) % nodes.length;
        pulsesRef.current.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: 0.04 + Math.random() * 0.04,
          color: '#1c97be',
        });
      }
    }
    requestRenderOnceRef.current?.();
  }, []);

  useEffect(() => {
    initNodes(mode);
  }, [mode, initNodes]);

  // Keep one canvas render loop, pause it offscreen, and retain it across theme changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsLastSample = performance.now();
    let isVisible = true;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    let foreground = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim() || '222 24% 13%';
    let isDark = document.documentElement.classList.contains('dark');
    const themeObserver = new MutationObserver(() => {
      foreground = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim() || '222 24% 13%';
      isDark = document.documentElement.classList.contains('dark');
      requestRenderOnceRef.current?.();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Pause rendering while the canvas is fully outside the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = 0;
        } else if (isVisible && !animId) {
          lastTime = performance.now();
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleResize = (width?: number, height?: number) => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      const rect = width === undefined || height === undefined ? canvas.getBoundingClientRect() : undefined;
      const cssWidth = width ?? rect?.width ?? 500;
      const cssHeight = height ?? rect?.height ?? 500;
      const dpr = Math.min(window.devicePixelRatio || 1, window.matchMedia('(max-width: 640px)').matches ? 1.25 : 1.5);
      canvasSizeRef.current = { width: cssWidth, height: cssHeight };
      const pixelWidth = Math.round(cssWidth * dpr);
      const pixelHeight = Math.round(cssHeight * dpr);
      if (canvas.width === pixelWidth && canvas.height === pixelHeight) return;
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      requestRenderOnceRef.current?.();
    };
    const handleWindowResize = () => handleResize();

    handleResize();
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry) handleResize(entry.contentRect.width, entry.contentRect.height);
    });
    resizeObserver.observe(canvas);
    window.addEventListener('resize', handleWindowResize);

    const render = (time: number) => {
      if (!isVisible) {
        animId = 0;
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.05);
      const frameScale = dt * 60;
      lastTime = time;

      // Calculate FPS
      frameCount++;
      if (time - fpsLastSample >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsLastSample)));
        frameCount = 0;
        fpsLastSample = time;
      }

      const width = canvasSizeRef.current.width || 500;
      const height = canvasSizeRef.current.height || 500;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Auto rotation
      if (!isDraggingRef.current) {
        rotRef.current.y += rotRef.current.vy * frameScale;
        rotRef.current.x += rotRef.current.vx * frameScale;
      }

      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);
      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);

      const fov = 420;
      const distance = 460;
      const nodes = nodesRef.current;

      // Project nodes to 2D
      const labelColor = `hsl(${foreground})`;
      const projected = nodes.map((n, idx) => {
        const timeOffset = time * 0.003 + n.pulsePhase;
        const curX = n.baseX + Math.sin(timeOffset) * 5 + n.vx * 12;
        const curY = n.baseY + Math.cos(timeOffset * 0.8) * 5 + n.vy * 12;
        const curZ = n.baseZ + Math.sin(timeOffset * 1.2) * 5 + n.vz * 12;

        const x1 = curX * cosY - curZ * sinY;
        const z1 = curZ * cosY + curX * sinY;

        const y2 = curY * cosX - z1 * sinX;
        const z2 = z1 * cosX + curY * sinX;

        const scale = fov / (distance + z2);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.max(isDark ? 0.15 : 0.3, Math.min(1, (z2 + 250) / 450));

        return {
          index: idx,
          x: px,
          y: py,
          z: z2,
          scale,
          alpha,
          label: n.label,
          type: n.type,
          radius: n.radius * scale,
          pulsePhase: n.pulsePhase,
        };
      });

      projected.sort((a, b) => a.z - b.z);

      // Background radial glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 12, cx, cy, Math.min(width, height) * 0.46);
      const themeColor = '28, 151, 190';
      glowGrad.addColorStop(0, `rgba(${themeColor}, 0.085)`);
      glowGrad.addColorStop(0.52, `rgba(${themeColor}, 0.025)`);
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Gimbal Sci-Fi Rings
      const ringRadii = [Math.min(width, height) * 0.39, Math.min(width, height) * 0.29];
      ringRadii.forEach((r, rIdx) => {
        ctx.save();
        ctx.translate(cx, cy);
        const ringAngle = time * (0.0012 * (rIdx % 2 === 0 ? 1 : -1)) + rIdx * 0.8;
        ctx.rotate(ringAngle);

        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.45, (rIdx * Math.PI) / 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${themeColor}, ${0.075 - rIdx * 0.018})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 13]);
        ctx.stroke();

        // Orbiting Satellite Packet (fast multi-pass arc, zero shadowBlur)
        const satAngle = time * 0.0028 * (rIdx + 1);
        const sx = Math.cos(satAngle) * r;
        const sy = Math.sin(satAngle) * (r * 0.45);

        ctx.beginPath();
        ctx.arc(sx, sy, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeColor}, 0.25)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${themeColor})`;
        ctx.fill();

        ctx.restore();
      });

      // Connect nearest neighbors with glowing synapses
      const maxDist = mode === 'quantum' ? 110 : mode === 'mri' ? 130 : 95;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * (isDark ? 0.24 : 0.38);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${themeColor}, ${lineAlpha})`;
            ctx.lineWidth = Math.max(0.6, (1 - dist / maxDist) * 1.5);
            ctx.stroke();
          }
        }
      }

      // Draw and update active Pulse Packets
      for (let i = pulsesRef.current.length - 1; i >= 0; i--) {
        const pulse = pulsesRef.current[i];
        pulse.progress += pulse.speed * frameScale;
        if (pulse.progress >= 1) {
          pulsesRef.current.splice(i, 1);
          continue;
        }

        const from = projected.find((p) => p.index === pulse.fromIndex);
        const to = projected.find((p) => p.index === pulse.toIndex);
        if (from && to) {
          const curX = from.x + (to.x - from.x) * pulse.progress;
          const curY = from.y + (to.y - from.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${themeColor}, 0.3)`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color;
          ctx.fill();
        }
      }

      // Randomly spawn pulses
      if (!prefersReducedMotion && Math.random() < 1 - Math.pow(0.8, frameScale) && nodes.length > 5) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = (from + Math.floor(Math.random() * 4) + 1) % nodes.length;
        pulsesRef.current.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: 0.035 + Math.random() * 0.035,
          color: `rgb(${themeColor})`,
        });
      }

      // Render expanding shockwaves (fast vector stroke, zero shadowBlur)
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 10 * frameScale;
        sw.alpha -= 0.035 * frameScale;
        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(cx, cy, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${themeColor}, ${sw.alpha * 0.7})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Render Nodes with hardware-accelerated glowing cores
      let foundHover: string | null = null;
      const labelBoxes: Array<{ left: number; right: number; top: number; bottom: number }> = [];
      projected.forEach((p) => {
        const pulseGlow = Math.sin(time * 0.004 + p.pulsePhase) * 0.3 + 0.7;

        // Check hover
        const mouseDist = Math.hypot(mousePosRef.current.x - p.x, mousePosRef.current.y - p.y);
        const isHovered = mouseDist < p.radius + 8;
        if (isHovered && p.label) {
          foundHover = p.label;
        }

        ctx.save();

        // 1. Outer halo arc (fast GPU alpha, replaces slow CPU shadowBlur)
        ctx.beginPath();
        ctx.arc(p.x, p.y, isHovered ? p.radius * 2.2 : p.radius * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeColor}, ${p.alpha * 0.25})`;
        ctx.fill();

        // 2. Inner crisp node
        ctx.beginPath();
        ctx.arc(p.x, p.y, isHovered ? p.radius * 1.3 : p.radius, 0, Math.PI * 2);
        if (p.type === 'core' || isHovered) {
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = `rgba(${themeColor}, ${p.alpha * pulseGlow})`;
        }
        ctx.fill();

        // Node Label HUD Tag
        if (p.label && (p.z > 0 || isHovered)) {
          ctx.font = isHovered ? '600 12px -apple-system, BlinkMacSystemFont, sans-serif' : '11px -apple-system, BlinkMacSystemFont, sans-serif';
          ctx.textAlign = 'left';
          const labelWidth = ctx.measureText(p.label).width;
          const labelBox = { left: p.x + 7, right: p.x + 9 + labelWidth, top: p.y - 6, bottom: p.y + 7 };
          const overlaps = labelBoxes.some((box) => labelBox.left < box.right + 4 && labelBox.right + 4 > box.left && labelBox.top < box.bottom + 3 && labelBox.bottom + 3 > box.top);
          if (isHovered || !overlaps) {
            labelBoxes.push(labelBox);
            ctx.fillStyle = isHovered ? `hsl(${foreground})` : labelColor;
            ctx.globalAlpha = isHovered ? 1 : Math.max(0.56, p.alpha * 0.86);
            ctx.fillText(p.label, p.x + 8, p.y + 3);
            ctx.globalAlpha = 1;
          }

          if (isHovered) {
            ctx.strokeStyle = `rgb(${themeColor})`;
            ctx.lineWidth = 1.2;
            ctx.strokeRect(p.x - 12, p.y - 12, 24, 24);
          }
        }
        ctx.restore();
      });

      if (foundHover !== hoveredNodeRef.current) {
        hoveredNodeRef.current = foundHover;
        setHoveredNode(foundHover);
      }

      animId = prefersReducedMotion ? 0 : requestAnimationFrame(render);
    };

    const requestRenderOnce = () => {
      if (!prefersReducedMotion || !isVisible || animId) return;
      lastTime = performance.now();
      animId = requestAnimationFrame(render);
    };
    requestRenderOnceRef.current = requestRenderOnce;

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion && animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
      if (prefersReducedMotion) requestRenderOnce();
      else if (isVisible && !animId) animId = requestAnimationFrame(render);
    };
    motionQuery.addEventListener('change', handleMotionPreference);

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      motionQuery.removeEventListener('change', handleMotionPreference);
      window.removeEventListener('resize', handleWindowResize);
      if (requestRenderOnceRef.current === requestRenderOnce) requestRenderOnceRef.current = null;
    };
  }, [mode]);

  // Mouse interaction handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    requestRenderOnceRef.current?.();

    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };

    rotRef.current.y += dx * 0.014;
    rotRef.current.x += dy * 0.014;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
    requestRenderOnceRef.current?.();
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMouseRef.current.x;
    const dy = e.touches[0].clientY - lastMouseRef.current.y;
    lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    rotRef.current.y += dx * 0.018;
    rotRef.current.x += dy * 0.018;
    requestRenderOnceRef.current?.();
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    requestRenderOnceRef.current?.();
  };

  return (
    <div
      ref={containerRef}
      className="neural-matrix-panel relative w-full h-[390px] sm:h-[450px] lg:h-[510px] flex flex-col justify-between group"
    >

      {/* Top HUD Telemetry Bar */}
      <div className="neural-telemetry relative z-10 flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-primary font-semibold tracking-wider">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            3D NEURAL CORE v2.6
          </span>
          <span className="neural-chip hidden sm:inline-block px-2.5 py-1 rounded-full text-primary">
            MGT • AGENTIC ARCHITECTURE
          </span>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="hidden md:flex items-center gap-1">
            <Radio className="h-3 w-3 text-emerald-400 animate-pulse" />
            LIVE COHERENCE: <span className="text-foreground">99.8%</span>
          </span>
          <span className="neural-chip px-2 py-1 rounded-full text-foreground font-mono">
            {fps} FPS
          </span>
        </div>
      </div>

      {/* 3D Interactive Canvas */}
      <div className="neural-canvas-stage relative flex-1 min-h-0 w-full cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={triggerPulse}
          className="w-full h-full block"
        />

        {/* Center Prompt Overlay */}
        <div className="neural-instruction absolute inset-x-0 bottom-0 pointer-events-none text-[10px] font-mono text-muted-foreground flex items-center justify-center gap-2 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>DRAG TO ROTATE 360° • CLICK FOR NEURAL SHOCKWAVE</span>
        </div>

        {/* Hovered Node Card */}
        {hoveredNode && (
          <div className="absolute top-4 right-4 z-20 pointer-events-none px-3 py-1.5 rounded-lg bg-card/90 border border-primary/40 backdrop-blur-md shadow-lg text-xs font-mono text-primary flex items-center gap-2 animate-scale-in">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span>TARGET: {hoveredNode}</span>
          </div>
        )}
      </div>

      {/* Bottom Mode Switcher & Action Bar */}
      <div className="neural-controls relative z-10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          <button
            onClick={() => setMode('synapse')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'synapse'
                ? 'neural-mode-active text-foreground font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            <Cpu className="h-3 w-3" />
            SYNAPSE MATRIX
          </button>
          <button
            onClick={() => setMode('quantum')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'quantum'
                ? 'neural-mode-active text-foreground font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            QUANTUM GNN
          </button>
          <button
            onClick={() => setMode('mri')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'mri'
                ? 'neural-mode-active text-foreground font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            <Activity className="h-3 w-3" />
            3D MRI VOXEL
          </button>
          <button
            onClick={() => setMode('swarm')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'swarm'
                ? 'neural-mode-active text-foreground font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            <Orbit className="h-3 w-3" />
            AGENT SWARM
          </button>
        </div>

        <button
          onClick={triggerPulse}
          className="neural-pulse-button ml-auto px-3 py-1 rounded-md text-xs font-mono bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-1.5 active:scale-95"
        >
          <Zap className="h-3 w-3" />
          PULSE ({pulseCount})
        </button>
      </div>
    </div>
  );
}

