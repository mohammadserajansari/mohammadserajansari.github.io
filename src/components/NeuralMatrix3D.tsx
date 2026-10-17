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

  // Rotation angles & interaction state
  const rotRef = useRef({ x: 0.2, y: 0.4, vx: 0.003, vy: 0.005 });
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
    const radius = 170;

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

    // Spawn 8 new high-speed pulse packets across random connected nodes
    const nodes = nodesRef.current;
    if (nodes.length > 5) {
      for (let i = 0; i < 8; i++) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = (from + Math.floor(Math.random() * 5) + 1) % nodes.length;
        pulsesRef.current.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: 0.02 + Math.random() * 0.03,
          color: mode === 'quantum' ? '#10b981' : mode === 'mri' ? '#d946ef' : mode === 'swarm' ? '#f59e0b' : '#00f0ff',
        });
      }
    }
  }, [mode]);

  useEffect(() => {
    initNodes(mode);
  }, [mode, initNodes]);

  // Main 3D render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsLastSample = performance.now();

    const handleResize = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Calculate FPS
      frameCount++;
      if (time - fpsLastSample >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsLastSample)));
        frameCount = 0;
        fpsLastSample = time;
      }

      const rect = containerRef.current?.getBoundingClientRect();
      const width = rect?.width || 500;
      const height = rect?.height || 500;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Auto rotation
      if (!isDraggingRef.current) {
        rotRef.current.y += rotRef.current.vy;
        rotRef.current.x += rotRef.current.vx;
      }

      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);
      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);

      const fov = 420;
      const distance = 460;
      const nodes = nodesRef.current;

      // Project nodes to 2D
      const projected = nodes.map((n, idx) => {
        // Natural subtle floating idle motion
        const timeOffset = time * 0.0015 + n.pulsePhase;
        const curX = n.baseX + Math.sin(timeOffset) * 4 + n.vx * 10;
        const curY = n.baseY + Math.cos(timeOffset * 0.8) * 4 + n.vy * 10;
        const curZ = n.baseZ + Math.sin(timeOffset * 1.2) * 4 + n.vz * 10;

        // Y-axis rotation
        const x1 = curX * cosY - curZ * sinY;
        const z1 = curZ * cosY + curX * sinY;

        // X-axis rotation
        const y2 = curY * cosX - z1 * sinX;
        const z2 = z1 * cosX + curY * sinX;

        // Perspective scale
        const scale = fov / (distance + z2);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.max(0.15, Math.min(1, (z2 + 250) / 450));

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

      // Sort by Z for proper depth rendering
      projected.sort((a, b) => a.z - b.z);

      // Cybernetic Background Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 260);
      const themeColor =
        mode === 'quantum' ? '16, 185, 129' : mode === 'mri' ? '217, 70, 239' : mode === 'swarm' ? '245, 158, 11' : '0, 240, 255';
      glowGrad.addColorStop(0, `rgba(${themeColor}, 0.16)`);
      glowGrad.addColorStop(0.5, `rgba(${themeColor}, 0.04)`);
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Gimbal Sci-Fi Rings
      const ringRadii = [210, 160, 110];
      ringRadii.forEach((r, rIdx) => {
        ctx.save();
        ctx.translate(cx, cy);
        const ringAngle = time * (0.0004 * (rIdx % 2 === 0 ? 1 : -1)) + rIdx * 0.8;
        ctx.rotate(ringAngle);

        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.45, (rIdx * Math.PI) / 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${themeColor}, ${0.12 - rIdx * 0.02})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 12]);
        ctx.stroke();

        // Orbiting Satellite Packet
        const satAngle = time * 0.001 * (rIdx + 1);
        const sx = Math.cos(satAngle) * r;
        const sy = Math.sin(satAngle) * (r * 0.45);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${themeColor})`;
        ctx.shadowColor = `rgb(${themeColor})`;
        ctx.shadowBlur = 8;
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
            const lineAlpha = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${themeColor}, ${lineAlpha})`;
            ctx.lineWidth = Math.max(0.6, (1 - dist / maxDist) * 1.5);
            ctx.stroke();
          }
        }
      }

      // Draw and update active Pulse Packets traveling between nodes
      for (let i = pulsesRef.current.length - 1; i >= 0; i--) {
        const pulse = pulsesRef.current[i];
        pulse.progress += pulse.speed;
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
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color;
          ctx.shadowColor = pulse.color;
          ctx.shadowBlur = 10;
          ctx.fill();
        }
      }

      // Randomly spawn pulses between connected nodes
      if (Math.random() < 0.08 && nodes.length > 5) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = (from + Math.floor(Math.random() * 4) + 1) % nodes.length;
        pulsesRef.current.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: 0.015 + Math.random() * 0.025,
          color: `rgb(${themeColor})`,
        });
      }

      // Render expanding shockwaves
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 5;
        sw.alpha -= 0.02;
        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(cx, cy, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${themeColor}, ${sw.alpha * 0.6})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = `rgb(${themeColor})`;
        ctx.shadowBlur = 12;
        ctx.stroke();
      }

      // Render Nodes with glowing cores
      let foundHover: string | null = null;
      projected.forEach((p) => {
        const pulseGlow = Math.sin(time * 0.004 + p.pulsePhase) * 0.3 + 0.7;

        // Check hover
        const mouseDist = Math.hypot(mousePosRef.current.x - p.x, mousePosRef.current.y - p.y);
        const isHovered = mouseDist < p.radius + 8;
        if (isHovered && p.label) {
          foundHover = p.label;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, isHovered ? p.radius * 1.6 : p.radius, 0, Math.PI * 2);

        if (p.type === 'core') {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.shadowColor = `rgb(${themeColor})`;
          ctx.shadowBlur = 18;
        } else if (isHovered) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = `rgb(${themeColor})`;
          ctx.shadowBlur = 15;
        } else {
          ctx.fillStyle = `rgba(${themeColor}, ${p.alpha * pulseGlow})`;
          ctx.shadowColor = `rgb(${themeColor})`;
          ctx.shadowBlur = 8;
        }
        ctx.fill();

        // Node Label HUD Tag
        if (p.label && (p.z > 0 || isHovered)) {
          ctx.font = isHovered ? 'bold 11px JetBrains Mono' : '10px JetBrains Mono';
          ctx.fillStyle = isHovered ? '#ffffff' : `rgba(255, 255, 255, ${p.alpha * 0.85})`;
          ctx.textAlign = 'left';
          ctx.fillText(p.label, p.x + 8, p.y + 3);

          if (isHovered) {
            // Little targeting reticle around hovered node
            ctx.strokeStyle = `rgb(${themeColor})`;
            ctx.lineWidth = 1.2;
            ctx.strokeRect(p.x - 12, p.y - 12, 24, 24);
          }
        }
        ctx.restore();
      });

      if (foundHover !== hoveredNode) {
        setHoveredNode(foundHover);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode, hoveredNode]);

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

    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };

    rotRef.current.y += dx * 0.008;
    rotRef.current.x += dy * 0.008;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
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

    rotRef.current.y += dx * 0.01;
    rotRef.current.x += dy * 0.01;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-primary/20 bg-card/40 backdrop-blur-md shadow-2xl flex flex-col justify-between group"
    >
      {/* Sci-Fi Hologram Corner Brackets */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-primary/10 bg-background/50 backdrop-blur-sm text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-primary font-semibold tracking-wider">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            3D NEURAL CORE v2.6
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
            MGT • AGENTIC ARCHITECTURE
          </span>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="hidden md:flex items-center gap-1">
            <Radio className="h-3 w-3 text-emerald-400 animate-pulse" />
            LIVE COHERENCE: <span className="text-foreground">99.8%</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-secondary/80 text-foreground font-mono">
            {fps} FPS
          </span>
        </div>
      </div>

      {/* 3D Interactive Canvas */}
      <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing">
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
        <div className="absolute bottom-4 left-4 pointer-events-none text-[11px] font-mono text-muted-foreground/80 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
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
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-t border-primary/10 bg-background/60 backdrop-blur-md">
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          <button
            onClick={() => setMode('synapse')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'synapse'
                ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            }`}
          >
            <Cpu className="h-3 w-3" />
            SYNAPSE MATRIX
          </button>
          <button
            onClick={() => setMode('quantum')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'quantum'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            QUANTUM GNN
          </button>
          <button
            onClick={() => setMode('mri')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'mri'
                ? 'bg-fuchsia-500 text-white font-bold shadow-lg shadow-fuchsia-500/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            }`}
          >
            <Activity className="h-3 w-3" />
            3D MRI VOXEL
          </button>
          <button
            onClick={() => setMode('swarm')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === 'swarm'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            }`}
          >
            <Orbit className="h-3 w-3" />
            AGENT SWARM
          </button>
        </div>

        <button
          onClick={triggerPulse}
          className="ml-auto px-3 py-1 rounded-md text-xs font-mono bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-1.5 active:scale-95"
        >
          <Zap className="h-3 w-3" />
          PULSE ({pulseCount})
        </button>
      </div>
    </div>
  );
}

