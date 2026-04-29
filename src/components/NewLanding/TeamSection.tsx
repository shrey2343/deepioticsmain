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
      bio: '20+ years in enterprise AI. Ayan leads strategy and client transformation — with a focus on AI that creates measurable business outcomes, not just technical novelty.',
      image: '/ayan.jpeg',
      imagePosition: 'center'
    },
    {
      initials: 'MJ',
      name: 'Dr. Madhu Jain',
      role: 'Head of Research & Data Science',
      bio: 'Ph.D. in Data Science. Leads the research function — ensuring every model, pipeline, and algorithm we ship is grounded in rigorous science and built for real-world performance.',
      image: '/madhuji.png',
      imagePosition: 'center'
    },
    {
      initials: 'RN',
      name: 'Rajshri Nigam',
      role: 'Director of Business Development',
      bio: 'Drives Deepiotics\' growth across UK, US, and European markets. Expert in building long-term client partnerships that deliver sustained AI value — not just a first project.',
      image: '/rajeshri.png',
      imagePosition: 'center'
    },
    {
      initials: 'NP',
      name: 'Narendra Pipliwal',
      role: 'Delivery Head',
      bio: 'Leads end-to-end project delivery across Deepiotics\' client portfolio — ensuring every AI solution ships on time, within scope, and performs exactly as designed in production.',
      image: '/Narendra.png',
      imagePosition: 'center'
    },
    {
      initials: 'AU',
      name: 'Amol Upadhyay',
      role: 'Head, Genomics & AI Bioinformatics',
      bio: 'Leads Deepiotics\' bioscience division — overseeing end-to-end NGS data analysis, AI-powered genomics pipelines, and bioinformatics solutions for genomics labs, hospitals, and research institutions worldwide.',
      image: '/amol.jpeg',
      imagePosition: 'center top'
    },
    {
      initials: 'MM',
      name: 'Manish Manon',
      role: 'Chief Financial Officer',
      bio: 'Oversees Deepiotics\' financial strategy, operations, and growth planning — ensuring the company scales sustainably while delivering maximum value to clients and stakeholders across global markets.',
      image: '/manish1.png',
      imagePosition: 'center',
      whiteBg: true
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
              <div className="team-avatar-wrapper">
                {member.image ? (
                  <>
                    <div className="team-avatar-ring"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-avatar-img"
                      style={{ 
                        objectPosition: member.imagePosition || 'center',
                        backgroundColor: member.whiteBg ? '#ffffff' : 'transparent'
                      }}
                    />
                    <div className="team-avatar-check">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <div className="team-av">{member.initials}</div>
                )}
              </div>
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
