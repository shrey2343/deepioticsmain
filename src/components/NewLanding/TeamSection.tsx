import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TeamSection: React.FC = () => {
  useEffect(() => {
    gsap.to('.team-card', {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#team',
        start: 'top 74%'
      }
    });
  }, []);

  const team = [
    {
      initials: 'AN',
      name: 'Ayan Nigam',
      role: 'Founder & CEO',
      bio: '20+ years in enterprise AI. Ayan leads strategy and client transformation — with a focus on AI that creates measurable business outcomes, not just technical novelty.'
    },
    {
      initials: 'MJ',
      name: 'Dr. Madhu Jain',
      role: 'Head of Research & Data Science',
      bio: 'Ph.D. in Data Science. Leads the research function — ensuring every model, pipeline, and algorithm we ship is grounded in rigorous science and built for real-world performance.'
    },
    {
      initials: 'RN',
      name: 'Rajshri Nigam',
      role: 'Director of Business Development',
      bio: 'Drives Deepiotics\' growth across UK, US, and European markets. Expert in building long-term client partnerships that deliver sustained AI value — not just a first project.'
    },
    {
      initials: 'NP',
      name: 'Narendra Pipliwal',
      role: 'Delivery Head',
      bio: 'Leads end-to-end project delivery across Deepiotics\' client portfolio — ensuring every AI solution ships on time, within scope, and performs exactly as designed in production.'
    },
    {
      initials: 'AU',
      name: 'Amol Upadhyay',
      role: 'Head, Genomics & AI Bioinformatics',
      bio: 'Leads Deepiotics\' bioscience division — overseeing end-to-end NGS data analysis, AI-powered genomics pipelines, and bioinformatics solutions for genomics labs, hospitals, and research institutions worldwide.'
    },
    {
      initials: 'MM',
      name: 'Manish Manon',
      role: 'Chief Financial Officer',
      bio: 'Oversees Deepiotics\' financial strategy, operations, and growth planning — ensuring the company scales sustainably while delivering maximum value to clients and stakeholders across global markets.'
    }
  ];

  return (
    <section id="team" className="s-white">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span className="eyebrow">The Team Behind the Work</span>
        <h2 className="sec-title">Our Leadership</h2>
        <p className="team-intro">
          Our leadership has built AI for Google, Microsoft, and 100+ enterprises across UK, US, and European markets. These aren't just credentials — they're the judgment and experience your project benefits from, day one.
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-av">{member.initials}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
