import { FC, useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useTheme } from 'next-themes';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();

  useEffect(() => {
    setMounted(true);

    setCurrentTheme(theme == 'system' ? systemTheme : theme);
  }, [systemTheme, theme]);

  if (!mounted) return null;

  return (
    <>
      <button className="w-8" onClick={() => setTheme(currentTheme == 'dark' ? 'light' : 'dark')}>
        {currentTheme == 'dark' ? <SunIcon className="text-slate-400" /> : <MoonIcon className="text-slate-500" />}
      </button>
    </>
  );
};
export default ThemeToggle;
