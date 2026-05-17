import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { Palette, Server, Database, Zap, Rocket } from 'lucide-react';

const updates = [
  { icon: Palette, title: 'Редизайн', text: 'Ушли с shadcn/ui к собственной системе', tag: 'UI' },
  { icon: Server, title: 'Своя инфра', text: 'С Heroku на self-hosted сервер', tag: 'Infra' },
  { icon: Database, title: 'Self-hosted Supabase', text: 'Превентивный переезд из облака', tag: 'Data' },
  { icon: Zap, title: '«Поболтаем?»', text: 'Еженедельные сессии живых мэтчей', tag: 'Product' },
  { icon: Rocket, title: 'Пилот', text: 'Атомарная сеть олимпиадников', tag: 'GTM' },
];

export default function Slide03WhatsNew() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          02 · Обзор семестра
        </p>
        <OzDisplay className="text-[84px] mb-12">
          5 главных <span className="text-[#FF6B5B]">обновлений</span>
        </OzDisplay>

        <div className="grid grid-cols-5 gap-6 flex-1">
          {updates.map((u, i) => (
            <OzCard key={i} accent={i === 3 ? 'coral' : 'white'} className="flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="border-[3px] border-[#1A1A1A] w-14 h-14 flex items-center justify-center bg-[#FFF6E0]">
                  <u.icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-widest opacity-60">{u.tag}</span>
              </div>
              <p className="text-[28px] font-black leading-none mb-3"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                {u.title}
              </p>
              <p className="text-[18px] font-medium leading-snug">{u.text}</p>
            </OzCard>
          ))}
        </div>
      </div>
    </OzLayout>
  );
}
