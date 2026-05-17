import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { MessageCircle, Users, Timer } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Все онлайн в одно время',
    text: 'Раз в неделю — окно сессии. Пользователь жмёт «Поболтаем?» и попадает в лобби.',
  },
  {
    icon: MessageCircle,
    title: 'Мэтч в реальном времени',
    text: 'Система находит пару из тех, кто прямо сейчас тоже ждёт. Открывается живой чат.',
  },
  {
    icon: Timer,
    title: 'Окно действия — 24 часа',
    text: 'Если за это время не обменялись задачей/зумом — мэтч сгорает. FOMO работает.',
  },
];

export default function Slide06Sessions() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          05 · Главная фича семестра
        </p>
        <OzDisplay className="text-[84px] mb-4">
          «<span className="text-[#FF6B5B]">Поболтаем?</span>»
        </OzDisplay>
        <p className="text-[28px] font-medium mb-12 max-w-[1300px] leading-snug">
          Еженедельные сессии живых мэтчей — лекарство от «мёртвых» мэтчей и проблемы первого сообщения.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {steps.map((s, i) => (
            <OzCard key={i} accent={i === 1 ? 'coral' : 'white'} className="flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-14 h-14 flex items-center justify-center">
                  <s.icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <span className="text-[36px] font-black opacity-30"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                  0{i + 1}
                </span>
              </div>
              <p className="text-[26px] font-black mb-3 leading-tight"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                {s.title}
              </p>
              <p className="text-[20px] font-medium leading-snug">{s.text}</p>
            </OzCard>
          ))}
        </div>

        <p className="text-[20px] font-semibold mt-8 opacity-70">
          Моментум &gt; идеальная совместимость. Горячие пользователи дают работающие мэтчи.
        </p>
      </div>
    </OzLayout>
  );
}
