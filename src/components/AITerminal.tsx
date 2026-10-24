import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, Download, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export function AITerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'sys_init --target=seraj_profile',
      timestamp: '16:24:00',
      output: (
        <div className="space-y-1.5 text-xs text-muted-foreground font-mono">
          <p className="text-emerald-400 font-semibold">
            ✔ [KERNEL READY] Seraj AI Neural Interface v2.6 initialized.
          </p>
          <p>
            Current Focus: <span className="text-primary font-bold">Agentic AI & Document Intelligence at MGT</span>
          </p>
          <p>
            Specialization: <span className="text-foreground">Agentic AI Swarms • Production RAG • Quantum-Physics ML</span>
          </p>
          <p className="text-muted-foreground">
            Type <span className="text-primary font-bold">help</span> or click any quick command chip below to interrogate the system.
          </p>
        </div>
      ),
    },
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cmdHistoryList, setCmdHistoryList] = useState<string[]>(['help']);
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const time = new Date().toLocaleTimeString();

    // Add to command history list
    setCmdHistoryList((prev) => [trimmed, ...prev.filter((c) => c !== trimmed)]);
    setCmdIndex(-1);

    let resultOutput: React.ReactNode;

    switch (lower) {
      case 'help':
        resultOutput = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-primary font-semibold">AVAILABLE COMMAND CODES:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-muted-foreground">
              <div><span className="text-emerald-400 font-bold">whoami</span> - Identity & executive summary</div>
              <div><span className="text-emerald-400 font-bold">mgt</span> - Current work and focus</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Full AI/ML tech stack matrix</div>
              <div><span className="text-emerald-400 font-bold">experience</span> - Career timeline & achievements</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Production RAG & AI systems</div>
              <div><span className="text-emerald-400 font-bold">research</span> - JCTC paper & 3D MRI thesis</div>
              <div><span className="text-emerald-400 font-bold">resume</span> - Download official resume PDF</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Direct links, phone & email</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Flush terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
        resultOutput = (
          <div className="space-y-2 text-xs font-mono text-muted-foreground">
            <p className="text-foreground font-semibold text-sm">
              Mohammad Seraj — AI/ML Engineer & Applied AI Researcher
            </p>
            <p>
              AI/ML professional with an <span className="text-primary font-semibold">M.Tech in Computational Biology from IIIT Delhi</span> and B.Tech in Biotechnology. 
              Over 1.5+ years building and deploying end-to-end NLP, Generative AI, and deep learning architectures.
            </p>
            <p>
              Known for reducing clinical trial identification times from months to &lt;30 minutes at Anervea Data Labs, 
              achieving state-of-the-art LogP prediction (R²=0.959) combining quantum mechanics and GNNs, and engineering 3D MRI volumetric diagnostic ensembles.
            </p>
          </div>
        );
        break;

      case 'mgt':
      case 'role':
        resultOutput = (
          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-bold">MGT // AGENTIC AI & DOCUMENT INTELLIGENCE</span>
            </div>
            <p className="text-muted-foreground">
              Architecting production-ready Generative AI solutions, Agentic workflows (CrewAI, LangGraph), 
              and enterprise microservices. Bridging cutting-edge LLM research and business enterprise automation.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Multi-Agent Orchestration', 'Enterprise RAG', 'AWS Bedrock', 'FastAPI Microservices', 'Docker CI/CD'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
        resultOutput = (
          <div className="space-y-3 text-xs font-mono">
            <p className="text-primary font-bold">TECHNICAL CAPABILITY MATRIX:</p>
            <div className="space-y-2 text-muted-foreground">
              <div>
                <span className="text-foreground font-semibold">⚡ GenAI & Agents:</span>{' '}
                LangChain, LangGraph, CrewAI, AWS Bedrock (Claude 3.5 Sonnet), Llama 3.3, Prompt Engineering, Tool Calling, PEFT/QLoRA, bitsandbytes
              </div>
              <div>
                <span className="text-foreground font-semibold">🔍 RAG & Vector Intelligence:</span>{' '}
                PGVector, Qdrant, FAISS, Embeddings, RAGAS Evaluation, LangSmith Tracing, Semantic Search
              </div>
              <div>
                <span className="text-foreground font-semibold">🧬 Biomedical AI:</span>{' '}
                BioBERT, AWS Textract Clinical Parsing, HIPAA-compliant microservices, Komodo Workspace, RDKit, DeepChem, Modred
              </div>
              <div>
                <span className="text-foreground font-semibold">🧠 Deep Learning & Vision:</span>{' '}
                PyTorch, PyTorch Geometric (GNNs), TensorFlow, YOLOv8n, OpenCV, 3D MRI Volumetric Vision (.nii)
              </div>
              <div>
                <span className="text-foreground font-semibold">☁️ Cloud & MLOps:</span>{' '}
                AWS (EC2, S3, Textract, Bedrock), Snowflake, Docker, Jenkins CI/CD, FastAPI, Git
              </div>
            </div>
          </div>
        );
        break;

      case 'experience':
        resultOutput = (
          <div className="space-y-3 text-xs font-mono">
            <p className="text-primary font-bold">CAREER TELEMETRY RECORD:</p>
            <div className="space-y-2.5">
              <div className="border-l-2 border-emerald-400 pl-3">
                <p className="text-foreground font-semibold">MGT — Agentic AI & Document Intelligence</p>
                <p className="text-muted-foreground text-[11px]">Present | Enterprise AI & Agentic Architectures</p>
              </div>
              <div className="border-l-2 border-primary pl-3">
                <p className="text-foreground font-semibold">Freelance AI Engineer / Independent Research</p>
                <p className="text-muted-foreground text-[11px]">Nov 2025 – June 2026 | Quantum-Physics Inspired ML Manuscript (JCTC, ACS Publications)</p>
              </div>
              <div className="border-l-2 border-primary/70 pl-3">
                <p className="text-foreground font-semibold">AI Developer — Anervea Data Labs Private Limited</p>
                <p className="text-muted-foreground text-[11px]">Apr 2025 – Oct 2025 | Clinical Trial RAG, Claude 3.5 Sonnet, PGVector, BioBERT</p>
              </div>
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="text-foreground font-semibold">Research Assistant — NeuroCare-eLab</p>
                <p className="text-muted-foreground text-[11px]">Jun 2024 – Apr 2025 | Drug Discovery, LogP Prediction (GNN R²=0.959)</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="text-foreground font-semibold">Researcher | M.Tech Thesis — IIIT-Delhi</p>
                <p className="text-muted-foreground text-[11px]">Jun 2023 – May 2024 | Volumetric 3D Deep Learning Alzheimer's Diagnostics (+64%)</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        resultOutput = (
          <div className="space-y-2.5 text-xs font-mono">
            <p className="text-primary font-bold">KEY PRODUCTION PROJECTS:</p>
            <div className="space-y-1.5 text-muted-foreground">
              <p>
                1. <span className="text-foreground font-semibold">Autonomous Voice Dealership Agent</span> — CrewAI, Llama 3.3, Deepgram Nova-2/Aura, FastAPI, zero-hallucination guardrails.
              </p>
              <p>
                2. <span className="text-foreground font-semibold">Clinical Trial Patient Recruitment Platform</span> — Claude 3.5 Sonnet, AWS Bedrock, PGVector, Komodo, RAGAS, Snowflake. Reduced patient ID from months to &lt;30m.
              </p>
              <p>
                3. <span className="text-foreground font-semibold">Quantum-Physics GNN Molecular Predictor</span> — PyTorch Geometric, RDKit, Quantum Descriptors (R² = 0.959). Manuscript under review at the Journal of Chemical Theory and Computation (ACS Publications).
              </p>
              <p>
                4. <span className="text-foreground font-semibold">Alzheimer's 3D MRI Volumetric Classifier</span> — Multi-view YOLOv8n ensemble on .nii MRI files (+64% over 2D).
              </p>
              <p>
                5. <span className="text-foreground font-semibold">GenAI Enterprise Document Intelligence</span> — FastAPI, Qdrant, LangChain, Hugging Face, Docker.
              </p>
            </div>
          </div>
        );
        break;

      case 'research':
        resultOutput = (
          <div className="space-y-2 text-xs font-mono text-muted-foreground">
            <p className="text-primary font-bold">ACADEMIC & RESEARCH IMPACT:</p>
            <div className="p-2.5 rounded bg-secondary/50 border border-primary/20 space-y-1">
              <p className="text-foreground font-semibold">
                📄 Manuscript (ct-2026-00508r): "Quantum-Physics Inspired ML Model for Partition Coefficient Prediction"
              </p>
              <p className="text-emerald-400 text-[11px]">
                Submitted to the Journal of Chemical Theory and Computation (ACS Publications) — Under Review
              </p>
              <p className="text-[11px]">
                First author/co-author work integrating quantum chemical descriptors (QM, QMPSA, ΔG) with Graph Neural Networks.
              </p>
            </div>
            <div className="p-2.5 rounded bg-secondary/50 border border-border space-y-1">
              <p className="text-foreground font-semibold">
                🧠 M.Tech Thesis: Volumetric 3D Deep Learning for Alzheimer's Diagnostics
              </p>
              <p className="text-[11px]">
                Indraprastha Institute of Information Technology Delhi (IIIT-D). Improved diagnostic accuracy by 64% over 2D baselines.
              </p>
            </div>
          </div>
        );
        break;

      case 'resume': {
        // Trigger download
        const link = document.createElement('a');
        link.href = '/Mohammad_Seraj_Resume.pdf';
        link.download = 'Mohammad_Seraj_Resume.pdf';
        link.click();

        resultOutput = (
          <div className="space-y-1 text-xs font-mono text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>DOWNLOADING: Mohammad_Seraj_Resume.pdf initiated. Check your downloads folder.</span>
          </div>
        );
        break;
      }

      case 'contact':
        resultOutput = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-primary font-bold">COMMUNICATION CHANNELS:</p>
            <div className="space-y-1 text-muted-foreground">
              <p>Email: <a href="mailto:mail.serajansari@gmail.com" className="text-foreground hover:text-primary underline">mail.serajansari@gmail.com</a></p>
              <p>Phone: <a href="tel:+919628104350" className="text-foreground hover:text-primary underline">+91- 9628104350</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/ansariserajmd/" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary underline">linkedin.com/in/ansariserajmd</a></p>
              <p>GitHub: <a href="https://github.com/mohammadserajansari" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary underline">github.com/mohammadserajansari</a></p>
              <p>Location: <span className="text-foreground">Varanasi, Uttar Pradesh, India</span></p>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        resultOutput = (
          <p className="text-xs font-mono text-destructive">
            Command not recognized: "{trimmed}". Type <span className="text-primary font-bold cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output: resultOutput,
        timestamp: time,
      },
    ]);
    setInput('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistoryList.length > 0 && cmdIndex < cmdHistoryList.length - 1) {
        const nextIdx = cmdIndex + 1;
        setCmdIndex(nextIdx);
        setInput(cmdHistoryList[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const prevIdx = cmdIndex - 1;
        setCmdIndex(prevIdx);
        setInput(cmdHistoryList[prevIdx]);
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="w-full rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/70 border-b border-border/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            seraj@portfolio:~$
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            title="Clear terminal"
            className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Quick Command Chips */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-background/40 border-b border-border/40 overflow-x-auto text-[11px]">
        <span className="text-muted-foreground flex items-center gap-1 flex-shrink-0">
          <Sparkles className="h-3 w-3 text-primary" /> Quick Query:
        </span>
        {['whoami', 'mgt', 'skills', 'experience', 'projects', 'research', 'resume', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex-shrink-0"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div ref={terminalContainerRef} className="p-4 sm:p-5 max-h-[340px] overflow-y-auto space-y-4">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-primary font-bold">➜</span>
              <span className="text-emerald-400 font-semibold">{item.command}</span>
              <span className="text-muted-foreground/60 text-[10px] ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Command Input Field */}
      <form onSubmit={onSubmit} className="flex items-center gap-2 px-4 py-3 bg-secondary/40 border-t border-border">
        <span className="text-primary font-bold">➜</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'mgt', 'projects', or click quick query..."
          className="flex-1 bg-transparent border-none outline-none text-xs font-mono text-foreground placeholder:text-muted-foreground/50"
        />
        <button
          type="submit"
          className="p-1.5 rounded-md bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
