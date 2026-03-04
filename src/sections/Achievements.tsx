import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'Global AI Hackathon 2024',
    rank: 'Winner',
    icon: <Trophy className="text-yellow-400" />,
    description: 'Developed an autonomous agent for disaster response coordination.',
  },
  {
    title: 'Open Source Contributor',
    rank: 'Top 1%',
    icon: <Zap className="text-cyan-400" />,
    description: 'Active contributor to major React and AI frameworks.',
  },
  {
    title: 'Tech Excellence Award',
    rank: '2023',
    icon: <Award className="text-purple-400" />,
    description: 'Recognized for outstanding contribution to system architecture.',
  },
];

export const Achievements = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-yellow-500 uppercase tracking-widest mb-4">Milestones</h2>
          <h3 className="text-4xl font-display font-bold">Recognition & Awards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl text-center group hover:border-yellow-500/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 block">{item.rank}</span>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
