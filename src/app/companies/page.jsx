import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart } from 'lucide-react'
import { Header } from "@/components/Header"

const companies = [
  {
    id: 1,
    title: "「ヘルスケア」領域でデジタルイノベーションをおこしたい",
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
    title: "ITの力で地方創生を実現！XXX協業企業を募集します",
    tags: ["スタートアップ", "プロダクト共同開発", "事業提携", "共同研究"],
    company: "XXX株式会社",
    representative: {
      name: "Tech 大翔",
      image: "/placeholder.svg?height=40&width=40"
    },
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "AR/VRのプロフェッショナル集団が御社のビジネスを加速させます",
    tags: ["スタートアップ", "プロダクト共同開発", "事業提携", "共同研究"],
    company: "XXX株式会社",
    representative: {
      name: "Tech 遼",
      image: "/placeholder.svg?height=40&width=40"
    },
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 4,
    title: "IPを利用したプロモーションならおまかせ！豊富な事例をご紹介可能！",
    tags: ["スタートアップ", "プロダクト共同開発", "事業提携", "共同研究"],
    company: "XXX株式会社",
    representative: {
      name: "Tech 大翔",
      image: "/placeholder.svg?height=40&width=40"
    },
    image: "/placeholder.svg?height=200&width=300"
  }
]

const companyTypes = [
  { id: "all", label: "すべて選択" },
  { id: "other", label: "その他" },
  { id: "foreign", label: "外資系企業" },
  { id: "listed", label: "上場企業" },
  { id: "government", label: "自治体" },
  { id: "large", label: "大手企業" },
  { id: "sme", label: "中小企業" },
  { id: "startup", label: "スタートアップ" }
]

const companyTraits = [
  { id: "all", label: "すべて選択" },
  { id: "other", label: "その他" },
  { id: "npo", label: "NPO/NGO" },
  { id: "education", label: "教育研究機関" },
  { id: "overseas", label: "海外ベンチャー" },
  { id: "sixmonths", label: "6ヶ月以内提携希望" },
  { id: "local", label: "地方発ベンチャー" },
  { id: "university", label: "大学発ベンチャー" }
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

export default function CompaniesPage() {
  return (
    <div className={styles.base.primary}>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 pr-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">キーワード</h3>
                <Input placeholder="キーワードを入力" className="bg-gray-50" />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">企業区分</h3>
                <div className="space-y-2">
                  {companyTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type.id}`} className="border-gray-300" />
                      <label htmlFor={`type-${type.id}`} className="text-sm">
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">企業の特徴</h3>
                <div className="space-y-2">
                  {companyTraits.map((trait) => (
                    <div key={trait.id} className="flex items-center space-x-2">
                      <Checkbox id={`trait-${trait.id}`} className="border-gray-300" />
                      <label htmlFor={`trait-${trait.id}`} className="text-sm">
                        {trait.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companies.map((company) => (
                <Card key={company.id} className="overflow-hidden bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className={`text-lg font-bold leading-tight ${styles.accent.primary}`}>{company.title}</h3>
                      <Button variant="ghost" size="icon" className={styles.accent.secondary}>
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
                        <div className={`text-sm ${styles.accent.secondary}`}>{company.company}</div>
                        <div className="text-sm font-medium">{company.representative.name}</div>
                      </div>
                    </div>

                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <img
                        src={company.image}
                        alt={company.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <Button className={`w-full ${styles.button.primary}`}>
                      協業提案する
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

