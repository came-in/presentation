import React from 'react';
import { OzLayout, OzDisplay } from './OzLayout';

export default function Slide01Title() {
  return (
    <OzLayout variant="cream" showLogo={false}>
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1A1A1A]" />

      <div className="flex flex-col justify-center h-full px-24">
        <OzDisplay className="text-[200px]">
          COME IN 
          <span className="text-[#FF6B5B]"> OZ</span>
        </OzDisplay>
        <p className="text-[36px] font-medium mt-10 max-w-[1100px] leading-tight">
          Платформа для поиска единомышленников
          <br />
          по интересам и целям.
        </p>

        <div className="absolute bottom-16 left-24 right-24 flex justify-between items-end">
          <div className="flex gap-3">
            <div className="border-[3px] border-[#1A1A1A] bg-[#FF6B5B] px-5 py-2 text-[18px] font-bold uppercase"
              style={{ boxShadow: '4px 4px 0 #1A1A1A' }}>
              oz.cmne.life
            </div>
          </div>
          <p className="text-[16px] font-semibold opacity-60">v2 · что обновилось →</p>
        </div>
      </div>
    </OzLayout>
  );
}
