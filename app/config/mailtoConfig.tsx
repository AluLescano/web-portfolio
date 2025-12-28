// Types
interface EmailProvider {
  id: "gmail" | "apple" | "outlook" | "yahoo" | "default"
  label: string
  style: "primary" | "secondary"
}

// Default email providers configuration
const DEFAULT_PROVIDERS: EmailProvider[] = [
  { id: "gmail", label: "Gmail", style: "primary" },
  { id: "outlook", label: "Outlook", style: "secondary" },
  { id: "yahoo", label: "Yahoo", style: "secondary" },
  { id: "default", label: "Default App", style: "secondary" },
]