import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';

export default function Slide02Recap() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          01 · Контекст
        </p>
        <OzDisplay className="text-[84px] mb-10">
          Что было <span className="text-[#FF6B5B]">в прошлом семестре</span>
        </OzDisplay>

        <div className="grid grid-cols-3 gap-8 flex-1">
          <OzCard accent="white">
            <p className="text-[14px] font-bold uppercase tracking-widest opacity-60 mb-3">Проблема</p>
            <p className="text-[26px] font-bold leading-tight">
              Найти «своих» под конкретную цель в соцсетях почти невозможно.
            </p>
          </OzCard>
          <OzCard accent="white">
            <p className="text-[14px] font-bold uppercase tracking-widest opacity-70 mb-3">Решение v1</p>
            <p className="text-[26px] font-bold leading-tight">
              Smart Matching: Big Five + векторный поиск + LLM-обоснование.
            </p>
          </OzCard>
          <OzCard accent="white">
            <p className="text-[14px] font-bold uppercase tracking-widest opacity-60 mb-3">Стек</p>
            <p className="text-[26px] font-bold leading-tight">
              FastAPI, Postgres, pgvector, Heroku.
            </p>
          </OzCard>
        </div>

        <p className="text-[22px] font-medium mt-10 opacity-70">
          В похоже сервисе (Joinee) LLM-обоснование не помогало начать диалог — появилась гипотеза находить другие подходы.
        </p>
      </div>
    </OzLayout>
  );
}
