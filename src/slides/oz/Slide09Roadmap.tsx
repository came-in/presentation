import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';

const items = [
  {
    n: '01',
    title: 'Закрыть UX-дыры',
    text: 'Переработка ключевых сценариев онбординга и мэтчинга по итогам пилота.',
  },
  {
    n: '02',
    title: 'Масштабнее запуск',
    text: 'Расширение за пределы первой атомарной сети — следующие сообщества.',
  },
  {
    n: '03',
    title: 'Постоянный CustDev',
    text: 'Регулярный контакт с пользователями: чего не хватает, что стоит улучшить.',
  },
  {
    n: '04',
    title: 'Новые атомарные сети',
    text: 'Олимпиадники — это одна сеть. Дальше: дизайнеры, спорт, языки, переезды.',
  },
];

export default function Slide09Roadmap() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          08 · Дальше
        </p>
        <OzDisplay className="text-[84px] mb-12">
          Планы на <span className="text-[#FF6B5B]">следующий семестр</span>
        </OzDisplay>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {items.map((it, i) => (
            <OzCard key={i} accent="white" className="flex items-start gap-6">
              <span className="text-[64px] font-black leading-none text-[#FF6B5B] flex-shrink-0"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                {it.n}
              </span>
              <div>
                <p className="text-[28px] font-black mb-2 leading-tight"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                  {it.title}
                </p>
                <p className="text-[20px] font-medium leading-snug">{it.text}</p>
              </div>
            </OzCard>
          ))}
        </div>
      </div>
    </OzLayout>
  );
}
