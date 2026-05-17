import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { GraduationCap, Trophy, Network } from 'lucide-react';

const channels = [
  {
    icon: GraduationCap,
    title: 'День открытых дверей МФТИ',
    text: 'Общались с абитуриентами и рассказывали о платформе.',
    tag: 'Offline',
  },
  {
    icon: Trophy,
    title: 'Олимпиада «Когнитивные технологии»',
    text: 'Реклама платформы среди участников олимпиады.',
    tag: 'Partnership',
  },
  {
    icon: Network,
    title: 'Атомарная сеть',
    text: 'Первые пользователи связаны программированием, что дает им общий контекст.',
    tag: 'Result',
  },
];

export default function Slide07Pilot() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          06 · Запуск пилота
        </p>
        <OzDisplay className="text-[84px] mb-4">
          Собрали <span className="text-[#FF6B5B]">атомарную сеть</span>
        </OzDisplay>
        <p className="text-[26px] font-medium mb-12 max-w-[1300px] leading-snug">
          Главный фокус семестра — не масштаб, а плотность связей внутри одного сообщества.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {channels.map((c, i) => (
            <OzCard key={i} accent={i === 2 ? 'coral' : 'white'} className="flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-14 h-14 flex items-center justify-center">
                  <c.icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-widest opacity-60">{c.tag}</span>
              </div>
              <p className="text-[24px] font-black mb-3 leading-tight"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                {c.title}
              </p>
              <p className="text-[20px] font-medium leading-snug">{c.text}</p>
            </OzCard>
          ))}
        </div>

        <p className="text-[20px] font-semibold mt-8 opacity-70">
          Олимпиадники-программисты — лишь одна из множества атомарных сетей. Дальше — другие сообщества.
        </p>
      </div>
    </OzLayout>
  );
}
