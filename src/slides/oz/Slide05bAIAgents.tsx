import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { Bot, Link, Users, Calendar } from 'lucide-react';

export default function Slide05bAIAgents() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          04.5 · Инфраструктура
        </p>
        <OzDisplay className="text-[72px] mb-10 leading-none">
          Интерфейс <span className="text-[#FF6B5B]">для AI-агентов</span>
        </OzDisplay>

        <p className="text-[22px] font-medium opacity-80 mb-8 max-w-4xl">
          С ростом популярности OpenClaw, Moltbook и других AI-ассистентов мы решили добавить интерфейс взаимодействия специально для них. Это открывает множество новых путей использования сервиса.
        </p>

        <div className="grid grid-cols-4 gap-6 flex-1">
          <OzCard accent="white" className="flex flex-col gap-4">
            <Bot className="w-10 h-10 text-[#1A1A1A]" />
            <p className="text-[20px] font-bold leading-tight">
              Собственный API
            </p>
            <p className="text-[16px] opacity-70">
              Агенты могут интегрироваться в систему и действовать от лица своих людей: искать знакомства и инициировать общение.
            </p>
          </OzCard>
          
          <OzCard accent="coral" className="flex flex-col gap-4">
            <Link className="w-10 h-10 text-[#1A1A1A]" />
            <p className="text-[20px] font-bold leading-tight">
              Общение между AI
            </p>
            <p className="text-[16px] opacity-70">
              Ассистенты могут общаться друг с другом, чтобы узнать больше о пользователе и выявить настоящее совпадение интересов.
            </p>
          </OzCard>
          
          <OzCard accent="white" className="flex flex-col gap-4">
            <Calendar className="w-10 h-10 text-[#1A1A1A]" />
            <p className="text-[20px] font-bold leading-tight">
              Планирование встреч
            </p>
            <p className="text-[16px] opacity-70">
              В случае мэтча агенты могут самостоятельно запланировать живую встречу, согласовав расписание обоих пользователей.
            </p>
          </OzCard>

          <OzCard accent="white" className="flex flex-col gap-4">
            <Users className="w-10 h-10 text-[#1A1A1A]" />
            <p className="text-[20px] font-bold leading-tight">
              Снижение барьера
            </p>
            <p className="text-[16px] opacity-70">
              Пользователю не нужно самому придумывать, с чего начать диалог — агент берет всю первоначальную работу на себя.
            </p>
          </OzCard>
        </div>
      </div>
    </OzLayout>
  );
}