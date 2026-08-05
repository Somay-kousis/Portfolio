"use client";

import { motion } from "framer-motion";

const experiments = [
  { id: "EXP-001", name: "Neural Style Transfer", compute: "RTX 4090", framework: "PyTorch", status: "Completed" },
  { id: "EXP-002", name: "Transformer Distillation", compute: "A100", framework: "JAX", status: "Ongoing" },
  { id: "EXP-003", name: "Latent Space interpolation", compute: "T4", framework: "TensorFlow", status: "Archived" },
];

export default function MLSystems() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 gap-8">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter max-w-2xl leading-[0.85]">
          Intelligence <br/><span className="text-muted-foreground">& Architecture</span>
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground max-w-xs md:text-right">
          Exploring the latent space. Building models that understand and generate.
        </p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-muted text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <th className="py-6 pr-6 font-normal">ID</th>
              <th className="py-6 px-6 font-normal">Experiment Name</th>
              <th className="py-6 px-6 font-normal">Compute</th>
              <th className="py-6 px-6 font-normal">Framework</th>
              <th className="py-6 pl-6 text-right font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {experiments.map((exp, i) => (
              <motion.tr 
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b border-muted/50 hover:bg-muted/10 transition-colors group cursor-crosshair"
              >
                <td className="py-8 pr-6 text-xs font-mono opacity-50">{exp.id}</td>
                <td className="py-8 px-6 text-lg md:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{exp.name}</td>
                <td className="py-8 px-6 text-sm text-muted-foreground">{exp.compute}</td>
                <td className="py-8 px-6 text-sm text-muted-foreground">{exp.framework}</td>
                <td className="py-8 pl-6 text-right text-xs font-mono uppercase">
                  <span className={exp.status === "Ongoing" ? "text-accent" : "text-muted-foreground"}>
                    [{exp.status}]
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
