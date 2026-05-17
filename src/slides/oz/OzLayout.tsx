import React from 'react';
import { cn } from '@/lib/utils';

interface OzLayoutProps {
  children: React.ReactNode;
  variant?: 'cream' | 'coral' | 'dark' | 'purple';
  className?: string;
  showLogo?: boolean;
}

const variantStyles: Record<string, string> = {
  cream: 'bg-[#FFF6E0] text-[#1A1A1A]',
  coral: 'bg-[#FF6B5B] text-[#1A1A1A]',
  dark: 'bg-[#1A1A1A] text-[#FFF6E0]',
  purple: 'bg-[#A87BFF] text-[#1A1A1A]',
};

export function OzLayout({ children, variant = 'cream', className, showLogo = true }: OzLayoutProps) {
  const isDark = variant === 'dark';
  return (
    <div
      className={cn(
        'w-full h-full relative slide-content',
        variantStyles[variant],
        className,
      )}
      style={{ fontFamily: '"Space Grotesk", "IBM Plex Sans", sans-serif' }}
    >
      {/* Top hairline */}
      <div className={cn('absolute top-0 left-0 right-0 h-[3px]', isDark ? 'bg-[#FFF6E0]' : 'bg-[#1A1A1A]')} />

      {showLogo && (
        <div className="absolute top-8 left-12 z-10 flex flex-col leading-none">
          <span
            className="text-[28px] tracking-tight"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            OZ
          </span>
          <span className="text-[10px] tracking-[0.2em] mt-1 opacity-70 font-semibold">
            BY CMNE
          </span>
        </div>
      )}

      <div className="w-full h-full">{children}</div>

      {/* Bottom hairline */}
      <div className={cn('absolute bottom-0 left-0 right-0 h-[3px]', isDark ? 'bg-[#FFF6E0]' : 'bg-[#1A1A1A]')} />
    </div>
  );
}

/** Neobrutalist card with hard shadow */
export function OzCard({
  children,
  className,
  accent = 'white',
}: {
  children: React.ReactNode;
  className?: string;
  accent?: 'white' | 'coral' | 'purple' | 'cream';
}) {
  const bg: Record<string, string> = {
    white: 'bg-white',
    coral: 'bg-[#FF6B5B]',
    purple: 'bg-[#A87BFF]',
    cream: 'bg-[#FFF6E0]',
  };
  return (
    <div
      className={cn(
        'border-[3px] border-[#1A1A1A] p-8 text-[#1A1A1A]',
        bg[accent],
        className,
      )}
      style={{ boxShadow: '8px 8px 0 #1A1A1A' }}
    >
      {children}
    </div>
  );
}

export function OzDisplay({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={cn('tracking-[-0.02em] leading-[0.9]', className)}
      style={{ fontFamily: '"Archivo Black", sans-serif' }}
    >
      {children}
    </h1>
  );
}
