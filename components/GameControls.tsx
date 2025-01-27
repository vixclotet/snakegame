import type React from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Rainbow } from "lucide-react"

interface GameControlsProps {
  onStartGame: () => void
  onToggleTheme: () => void
  onToggleRainbow: () => void
  isDarkMode: boolean
  isRainbowMode: boolean
}

const GameControls: React.FC<GameControlsProps> = ({
  onStartGame,
  onToggleTheme,
  onToggleRainbow,
  isDarkMode,
  isRainbowMode,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
      <Button
        onClick={onStartGame}
        variant="default"
        className={isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : ""}
      >
        Start Game
      </Button>
      <Button
        onClick={onToggleTheme}
        variant="outline"
        className={isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-white border-gray-600" : ""}
      >
        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      <Button
        onClick={onToggleRainbow}
        variant={isRainbowMode ? "default" : "outline"}
        className={`
          ${isDarkMode && !isRainbowMode ? "bg-gray-700 hover:bg-gray-600 text-white border-gray-600" : ""}
          ${isRainbowMode ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" : ""}
        `}
      >
        <Rainbow className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default GameControls

