import React from 'react';
import { OzLayout, OzCard, OzDisplay } from './OzLayout';
import { Database, User, Bot, Mail, MessageSquare, Zap } from 'lucide-react';

export default function Slide05Infra() {
  return (
    <OzLayout variant="cream">
      <div className="flex flex-col h-full px-24 pt-32 pb-20">
        <p className="text-[22px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
          04 · Инфраструктура
        </p>
        <OzDisplay className="text-[64px] mb-8">
          Как работает <span className="text-[#FF6B5B]">стек</span>
        </OzDisplay>

        <div className="flex gap-6 flex-1 h-[450px]">
          {/* Левая колонка - Переезд */}
          <div className="w-1/4 flex flex-col gap-6">
            <OzCard accent="coral" className="flex-1 flex flex-col justify-center gap-4 p-6">
              <p className="text-[20px] font-black leading-tight" style={{ fontFamily: '"Archivo Black", sans-serif' }}>Контроль над стеком</p>
              <p className="text-[16px] font-medium leading-snug">
                Мы переехали с Heroku и Supabase Cloud на <b>свой VPS + Self-hosted Supabase</b>. Это дает независимость от блокировок провайдеров, но требует больше DevOps-работы.
              </p>
            </OzCard>
          </div>

          {/* Правая колонка - Схема */}
          <OzCard accent="white" className="flex-1 p-8 flex flex-col">
            <p className="text-[14px] font-bold uppercase tracking-widest opacity-60 mb-6">Архитектура</p>
            
            <div className="flex flex-col h-full justify-between gap-4">
              {/* Users Row */}
              <div className="flex gap-4">
                <div className="flex-1 border-[3px] border-[#1A1A1A] bg-[#FFF6E0] p-4 flex items-center gap-3 shadow-[4px_4px_0_#1A1A1A]">
                  <User className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-[18px]">Обычный юзер</h3>
                    <p className="text-[12px] opacity-70">Фронтенд клиент</p>
                  </div>
                </div>
                <div className="flex-1 border-[3px] border-[#1A1A1A] bg-[#FFF6E0] p-4 flex items-center gap-3 shadow-[4px_4px_0_#1A1A1A]">
                  <Bot className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-[18px]">AI-Агент</h3>
                    <p className="text-[12px] opacity-70">API интерфейс</p>
                  </div>
                </div>
              </div>

              {/* Core (Supabase) */}
              <div className="border-[3px] border-[#1A1A1A] bg-[#E8F3EE] p-5 shadow-[4px_4px_0_#1A1A1A] relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-[#269773]" />
                  <h3 className="font-black text-[24px]">Supabase (VPS)</h3>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 border-[2px] border-[#1A1A1A] bg-white p-3">
                    <p className="font-bold text-[14px]">Авторизация</p>
                    <p className="text-[12px] opacity-70 leading-tight mt-1">Регистрация, пароли, подтверждение email</p>
                  </div>
                  <div className="flex-1 border-[2px] border-[#1A1A1A] bg-white p-3">
                    <p className="font-bold text-[14px]">База данных</p>
                    <p className="text-[12px] opacity-70 leading-tight mt-1">Профили с эмбеддингами, сообщения</p>
                  </div>
                </div>
              </div>

              {/* Webhooks to Notifications Row */}
              <div className="flex gap-4 relative">
                <div className="absolute top-[-30px] left-1/2 w-[3px] bg-[#1A1A1A] h-[30px] -translate-x-1/2 flex items-center justify-center">
                   <div className="bg-[#1A1A1A] text-white text-[10px] font-bold px-2 py-1 rounded">Webhook (новое сообщение)</div>
                </div>
                
                <div className="flex-1 border-[3px] border-[#1A1A1A] bg-white p-4 flex items-center gap-3 shadow-[4px_4px_0_#1A1A1A]">
                  <Zap className="w-6 h-6 text-[#FF6B5B]" />
                  <div>
                    <h3 className="font-bold text-[16px]">Push сервис</h3>
                  </div>
                </div>
                <div className="flex-1 border-[3px] border-[#1A1A1A] bg-white p-4 flex items-center gap-3 shadow-[4px_4px_0_#1A1A1A]">
                  <MessageSquare className="w-6 h-6 text-[#0088cc]" />
                  <div>
                    <h3 className="font-bold text-[16px]">Telegram Бот</h3>
                  </div>
                </div>
              </div>
            </div>
          </OzCard>
        </div>
      </div>
    </OzLayout>
  );
}
