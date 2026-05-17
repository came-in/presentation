import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { X, Check } from 'lucide-react';

export default function Slide04Redesign() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          03 · Дизайн
        </p>
        <OzDisplay className="text-[84px] mb-10">
          Свой визуальный <span className="text-[#FF6B5B]">язык</span>
        </OzDisplay>

        <div className="grid grid-cols-2 gap-10 flex-1">
          <OzCard accent="white">
            <div className="flex items-center gap-3 mb-6">
              <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-12 h-12 flex items-center justify-center">
                <X className="w-7 h-7" strokeWidth={3} />
              </div>
              <p className="text-[28px] font-black" style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                Было: shadcn/ui
              </p>
            </div>
            <ul className="space-y-4 text-[22px] font-medium leading-snug">
              <li>— «Дашбордный» вайб, корпоративность</li>
              <li>— Стерильные радиусы и тени</li>
              <li>— Сложно отличиться от других стартапов</li>
              <li>— Не вызывает эмоций, не «зовёт» к общению</li>
            </ul>
          </OzCard>

          <OzCard accent="coral">
            <div className="flex items-center gap-3 mb-6">
              <div className="border-[3px] border-[#1A1A1A] bg-[#FFF6E0] w-12 h-12 flex items-center justify-center">
                <Check className="w-7 h-7" strokeWidth={3} />
              </div>
              <p className="text-[28px] font-black" style={{ fontFamily: '"Archivo Black", sans-serif' }}>
                Стало: своя система
              </p>
            </div>
            <ul className="space-y-4 text-[22px] font-medium leading-snug">
              <li>— Необрутализм: жирный шрифт, резкие тени</li>
              <li>— Тёплая палитра: кремовый + коралл</li>
              <li>— Запоминающийся, живой характер</li>
              <li>— Подходит соцпродукту, а не B2B-SaaS</li>
            </ul>
          </OzCard>
        </div>

        <p className="text-[20px] font-semibold mt-8 opacity-70">
          Дизайн как часть продукта: интерфейс должен передавать «человечность» платформы.
        </p>
      </div>
    </OzLayout>
  );
}
