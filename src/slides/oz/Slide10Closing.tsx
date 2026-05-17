import React from 'react';
import { OzLayout, OzDisplay } from './OzLayout';

export default function Slide10Closing() {
  return (
    <OzLayout variant="dark" showLogo={false}>
      <div className="absolute top-8 left-12 flex flex-col leading-none">
        <span style={{ fontFamily: '"Archivo Black", sans-serif' }} className="text-[32px] text-[#FFF6E0]">OZ</span>
        <span className="text-[11px] tracking-[0.25em] mt-1 opacity-60 font-semibold text-[#FFF6E0]">BY CMNE</span>
      </div>

      <div className="flex flex-col justify-center h-full px-24">
        <p className="text-[28px] font-semibold mb-8 opacity-70 uppercase tracking-[0.2em]">
          Спасибо
        </p>
        <OzDisplay className="text-[180px] text-[#FFF6E0]">
          НАЙДИ<br />
          <span className="text-[#FF6B5B]">СВОИХ</span><br />
          ЛЮДЕЙ.
        </OzDisplay>

        <div className="absolute bottom-16 left-24 right-24 flex justify-between items-end text-[#FFF6E0]">
          <div>
            <p className="text-[16px] font-bold uppercase tracking-widest opacity-60 mb-2">Сайт</p>
            <p className="text-[32px] font-black" style={{ fontFamily: '"Archivo Black", sans-serif' }}>
              oz.cmne.life
            </p>
          </div>
          <div className="text-right">
            <p className="text-[16px] font-bold uppercase tracking-widest opacity-60 mb-2">Команда</p>
            <p className="text-[22px] font-semibold opacity-80">
              Булат · Дмитрий · Башир · Вадим<br />
              Данил · Руслан · Матвей
            </p>
          </div>
        </div>
      </div>
    </OzLayout>
  );
}
