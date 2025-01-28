'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// make sure these are aligned with styles/globals.css
const DARK_MODE_VAR = ['dark', 'light'] as const;
const THEME_COLOURS = [
  'green',
  'blue',
  'red',
  'violet',
  'sepia',
  'default',
] as const;

export const AvailableThemes = DARK_MODE_VAR.flatMap((isDarkMode) =>
  THEME_COLOURS.map((colour) => colour + '-' + isDarkMode)
);
type ThemeColour = (typeof THEME_COLOURS)[number];

const isThemeColour = (colour: string): colour is ThemeColour => {
  return THEME_COLOURS.includes(colour as ThemeColour);
};

type ThemeCombo = {
  darkMode: boolean;
  colour: ThemeColour;
};

export const ThemeToggle = () => {
  const firstRender = useRef(true);
  const { setTheme, theme } = useTheme();
  const [themeCombo, setThemeCombo] = useState<ThemeCombo>({
    darkMode: false,
    colour: 'default',
  });

  useLayoutEffect(() => {
    let darkMode = false;
    let colour = 'default';
    if (theme && firstRender.current) {
      if (theme.includes('dark')) {
        darkMode = true;
      }

      if (theme.includes('-')) {
        colour = theme.split('-')[0];
      }

      setThemeCombo({
        darkMode,
        colour: isThemeColour(colour) ? colour : 'default',
      });
      firstRender.current = false;
    }
  }, [theme]);

  useEffect(() => {
    setTheme(`${themeCombo.colour}-${themeCombo.darkMode ? 'dark' : 'light'}`);
  }, [themeCombo.colour, themeCombo.darkMode, themeCombo, setTheme]);

  const setThemeColour = (colour: ThemeColour) => {
    setThemeCombo({ ...themeCombo, colour });
  };

  const toggleDarkMode = () => {
    setThemeCombo({ ...themeCombo, darkMode: !themeCombo.darkMode });
  };

  return (
    <div className="container z-10 flex max-w-full flex-row justify-end p-0 pr-1 pt-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="z-10">
            Colour
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {THEME_COLOURS.map((colour) => (
            <DropdownMenuCheckboxItem
              checked={themeCombo.colour === colour}
              onCheckedChange={() => setThemeColour(colour)}
              key={colour}
            >
              <div className="first-letter:capitalize">{colour}</div>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="icon"
        className="z-10"
        onClick={() => toggleDarkMode()}
      >
        <Sun className="h-6 w-[1.3rem] dark:hidden" />
        <Moon className="hidden size-5 dark:block" />
        <span className="sr-only">Toggle theme dark mode</span>
      </Button>
    </div>
  );
};
