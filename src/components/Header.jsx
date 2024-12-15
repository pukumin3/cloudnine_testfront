import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const styles = {
  accent: {
    primary: "text-[#28889C]",
    secondary: "text-[#7D8F9B]",
    tertiary: "text-[#9AD8E5]",
  },
}

export function Header() {
  return (
    (<header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${styles.accent.primary}`}>
          Cloud Nine
        </Link>
        <nav className="space-x-4">
          <Link href="/companies" className={styles.accent.secondary}>
            企業一覧
          </Link>
          <Link href="/recommendations" className={styles.accent.secondary}>
            おすすめ企業
          </Link>
        </nav>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>)
  );
}

