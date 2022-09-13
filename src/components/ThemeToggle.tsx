import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (systemTheme) setTheme(systemTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);

  if (!mounted) return null;

  return (
    <>
      <button className="w-8" onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
        {theme == 'dark' ? <SunIcon className="text-slate-400" /> : <MoonIcon className="text-slate-500" />}
      </button>
    </>
  );
};
export default ThemeToggle;
