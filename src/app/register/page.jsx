'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import registerUser from './registerUser';


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

export default function RegisterPage() {
  const router = useRouter()
  const [companyCategory, setCompanyCategory] = useState('');

  // ボタン押下時にAPIを叩いて処理を行った後、companiesへ遷移
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = document.getElementById('abc');
    const formData = new FormData(form);
    await registerUser(formData);
    alert("会員登録が完了しました！");
    router.push('/companies');
  }
  return (
    (<div
      className={`container mx-auto p-4 flex justify-center items-center min-h-screen ${styles.base.primary}`}>
      <Card className="w-full max-w-md bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className={`text-2xl font-bold text-center ${styles.accent.primary}`}>会員登録</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="abc" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">会社名</Label>
                <Input id="company-name" name="company-name" placeholder="株式会社〇〇" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representative">代表者名</Label>
                <Input id="representative" name="user_name" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email" name="email"
                  type="email"
                  placeholder="example@company.com"
                  required
                  className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">パスワード</Label>
                <Input id="password" name="password" type="password" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">業種</Label>
                <Select onValueChange={(value) => setCompanyCategory(value)}>
                  <SelectTrigger id="industry" name="industry" className="bg-gray-50">
                    <SelectValue placeholder="業種を選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT・通信</SelectItem>
                    <SelectItem value="manufacturing">製造業</SelectItem>
                    <SelectItem value="finance">金融・保険</SelectItem>
                    <SelectItem value="retail">小売・卸売</SelectItem>
                    <SelectItem value="service">サービス業</SelectItem>
                  </SelectContent>
                </Select>
                {/* 隠し入力を追加 */}
                <input type="hidden" name="company_category" value={companyCategory} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_url">企業サイトURL</Label>
                <Input id="company_url" name="company_url" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_size">事業規模</Label>
                <Input id="company_size" name="company_size" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entity_title">投稿タイトル</Label>
                <Input id="entity_title" name="entity_title" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entry_image">イメージ画像</Label>
                <Input id="entry_image" name="entry_image" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entry_description">説明文</Label>
                <Input id="entry_description" name="entry_description" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="strength">事業の特長</Label>
                <Input id="strength" name="strength" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entry_achievement">達成したいこと</Label>
                <Input id="entry_achievement" name="entry_achievement" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">タグ</Label>
                <Input id="tags" name="tags" placeholder="山田 太郎" required className="bg-gray-50" />
              </div>
            </div>
            <CardFooter>
              <Button type="submit" className={`w-full ${styles.button.primary}`}>
                登録する
              </Button>
            </CardFooter>
          </form>
        </CardContent>
        <CardFooter>
          {/* <Button
            className={`w-full ${styles.button.primary}`}
            onClick={() => router.push('/companies')}>
            登録する
          </Button> */}
        </CardFooter>
      </Card>
    </div>)
  );
}

