import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
const GithubButton = () => {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://github.com/MichalKonvic/provider-generator" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
    </Button>
  )
}

export default GithubButton