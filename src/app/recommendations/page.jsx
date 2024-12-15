"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Header } from "@/components/Header"

const recommendedCompanies = [
  {
    id: 1,
    title: "「ヘルスケア」領域でデジタルイノベーションをおこしたい",
    rating: 4,
    tags: ["スタートアップ", "プロダクト共同開発", "事業提携", "共同研究"],
    company: "XXX株式会社",
    representative: {
      name: "Tech 華子",
      image: "/placeholder.svg?height=40&width=40"
    },
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "AR/VRのプロフェッショナル集団が御社のビジネスを加速させます",
    rating: 3,
    tags: ["スタートアップ", "プロダクト共同開発", "事業提携", "共同研究"],
    company: "XXX株式会社",
    representative: {
      name: "Tech 遼",
      image: "/placeholder.svg?height=40&width=40"
    },
    image: "/placeholder.svg?height=200&width=300"
  }
]

const styles = {
  base: {
    primary: "bg-[#FFFFFF]",
    secondary: "bg-[#F3F4F6]",
  },
  accent: {
    primary: "text-[#28889C]",
    secondary: "text-[#7D8F9B]",
    tertiary: "text-[#9AD8E5]",
  },
  button: {
    primary: "bg-[#28889C] hover:bg-[#1F6B7D] text-white",
  }
}

export default function RecommendationsPage() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "XXX株式会社のCEOを教えてください。",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      role: "user",
      content: "はい、お答えします。",
    },
    {
      role: "bot",
      content: "XXX株式会社は高い成長と収穫量の常時化が特徴です。XXX株式会社は販路の拡大が課題と捉えているため、御社の△△△とコラボすることで、百貨店やショッピングセンターでの大規模な催事を実現するのはどうでしょう。",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      role: "user",
      content: "はい、お答えします。",
    },
    {
      role: "bot",
      content: "では、△△△との相性はどうでしょうか？",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
    }
  }

  return (
    (<div className={styles.base.primary}>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recommended Companies */}
          <div className="space-y-6">
            <h2 className={cn("text-xl font-bold", styles.accent.primary)}>あなたへのおすすめ企業</h2>
            {recommendedCompanies.map((company) => (
              <Card
                key={company.id}
                className="overflow-hidden bg-white border border-gray-200 shadow-sm">
                <div className="p-6 space-y-4">
                  <div className={cn("flex items-center gap-1 mb-2", styles.accent.primary)}>
                    あなたへのおすすめ度：
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < company.rating ? cn("fill-current", styles.accent.primary) : "fill-gray-200 text-gray-200"
                        }`} />
                    ))}
                  </div>

                  <div className="flex justify-between items-start">
                    <h3 className={cn("text-lg font-bold leading-tight", styles.accent.primary)}>{company.title}</h3>
                    <Button variant="ghost" size="icon" className="text-gray-500">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={company.representative.image} alt={company.representative.name} />
                      <AvatarFallback>{company.representative.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className={cn("text-sm", styles.accent.secondary)}>{company.company}</div>
                      <div className="text-sm font-medium">{company.representative.name}</div>
                    </div>
                  </div>

                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.title}
                      className="object-cover w-full h-full" />
                  </div>

                  <Button className={cn("w-full", styles.button.primary)}>
                    協業提案する
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Chat Interface */}
          <div
            className={cn(
              "rounded-lg p-4 h-[800px] flex flex-col bg-white border border-gray-200 shadow-sm",
              styles.base.secondary
            )}>
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex items-end gap-2 max-w-[80%]">
                    {message.role === "bot" && (
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={message.avatar} />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-2xl p-4 ${
                        message.role === "user"
                          ? styles.base.primary
                          : cn(styles.button.primary, "text-white")
                      }`}>
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="メッセージを入力"
                className="flex-1 bg-gray-50"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
              <Button onClick={handleSendMessage} className={styles.button.primary}>送信</Button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

