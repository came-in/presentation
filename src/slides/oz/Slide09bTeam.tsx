import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';

const team = [
  {
    name: 'Зарипов Булат',
    role: 'Team Lead',
    image: 'team_photos/bulat.jpg',
  },
  {
    name: 'Безбородов Руслан',
    role: 'Frontend Dev',
    image: 'team_photos/ruslan.png',
  },
  {
    name: 'Ряжских Дмитрий',
    role: 'Backend Dev',
    image: 'team_photos/dima.jpg',
  },
  {
    name: 'Конов Илья',
    role: 'Mentor',
    image: 'team_photos/ilya.jpg',
  },
];

export default function Slide09bTeam() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          08 · Команда
        </p>
        <OzDisplay className="text-[84px] mb-12">
          Лица <span className="text-[#FF6B5B]">проекта</span>
        </OzDisplay>

        <div className="flex gap-8 flex-1">
          {team.map((member, i) => (
            <OzCard key={i} accent="white" className="flex-1 flex flex-col items-center p-6 text-center">
              <div 
                className="w-48 h-48 rounded-full mb-6 border-[4px] border-[#1A1A1A] overflow-hidden bg-[#FFF6E0]"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-[24px] font-black leading-tight mb-2" style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                {member.name}
              </p>
              <p className="text-[18px] font-bold uppercase tracking-widest opacity-60">
                {member.role}
              </p>
            </OzCard>
          ))}
        </div>
      </div>
    </OzLayout>
  );
}