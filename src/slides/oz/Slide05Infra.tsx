import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { ArrowRight } from 'lucide-react';

const moves = [
  {
    title: 'Heroku → Self-hosted',
    before: 'Heroku',
    after: 'Свой VPS',
    reason: 'Российские провайдеры начали блокировать Heroku — пользователи теряли доступ.',
  },
  {
    title: 'Supabase Cloud → Self-hosted Supabase',
    before: 'Supabase Cloud',
    after: 'Self-hosted',
    reason: 'Превентивный переезд — не хотим повторения истории с блокировками.',
  },
];

export default function Slide05Infra() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          04 · Инфраструктура
        </p>
        <OzDisplay className="text-[84px] mb-12">
          Контроль над <span className="text-[#FF6B5B]">стеком</span>
        </OzDisplay>

        <div className="grid grid-cols-2 gap-10 flex-1">
          {moves.map((m, i) => (
            <OzCard key={i} accent="white" className="flex flex-col">
              <p className="text-[24px] font-black mb-6"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                {m.title}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] px-5 py-3 text-[20px] font-bold line-through opacity-60">
                  {m.before}
                </div>
                <ArrowRight className="w-8 h-8" strokeWidth={3} />
                <div className="border-[3px] border-[#1A1A1A] bg-[#FF6B5B] px-5 py-3 text-[20px] font-black"
                  style={{ boxShadow: '4px 4px 0 #1A1A1A' }}>
                  {m.after}
                </div>
              </div>
              <p className="text-[22px] font-medium leading-snug mt-auto">{m.reason}</p>
            </OzCard>
          ))}
        </div>

        <p className="text-[20px] font-semibold mt-8 opacity-70">
          Цена: больше DevOps-работы. Выигрыш: стабильность и независимость от внешних блокировок.
        </p>
      </div>
    </OzLayout>
  );
}
