import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './Button';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 p-0"
        >
            {theme === 'light' ? (
                <HiMoon className="w-5 h-5" />
            ) : (
                <HiSun className="w-5 h-5" />
            )}
        </Button>
    );
}