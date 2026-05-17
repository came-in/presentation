import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { AlertTriangle, Lightbulb, MessageSquare } from 'lucide-react';

export default function Slide08Learnings() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          07 · Что узнали
        </p>
        <OzDisplay className="text-[84px] mb-12">
          Пилот показал то,<br />
          <span className="text-[#FF6B5B]">чего мы не видели сами</span>
        </OzDisplay>

        <div className="grid grid-cols-3 gap-8 flex-1">
          <OzCard accent="white" className="flex flex-col">
            <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-14 h-14 flex items-center justify-center mb-6">
              <AlertTriangle className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <p className="text-[26px] font-black mb-3 leading-tight"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}>
              UX неинтуитивен
            </p>
            <p className="text-[20px] font-medium leading-snug">
              То, что для нас очевидно, для пользователя — нет. Целые сценарии «теряются».
            </p>
          </OzCard>

          <OzCard accent="white" className="flex flex-col">
            <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-14 h-14 flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <p className="text-[26px] font-black mb-3 leading-tight"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}>
              Живой фидбек &gt; гипотезы
            </p>
            <p className="text-[20px] font-medium leading-snug">
              Реальные пользователи дают ту правду, которую не получить от внутренних обсуждений.
            </p>
          </OzCard>

          <OzCard accent="coral" className="flex flex-col">
            <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-14 h-14 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <p className="text-[26px] font-black mb-3 leading-tight"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}>
              Атомарная сеть работает
            </p>
            <p className="text-[20px] font-medium leading-snug">
              Общий контекст (программирование) снижает порог входа в первый диалог.
            </p>
          </OzCard>
        </div>
      </div>
    </OzLayout>
  );
}
