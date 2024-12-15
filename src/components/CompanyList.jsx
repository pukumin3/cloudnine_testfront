import React from 'react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart } from 'lucide-react'

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

const CompanyList = ({ companies }) => {
  return (
    (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {companies.map((company) => (
        <Card
          key={company.id}
          className="overflow-hidden bg-white border border-gray-200 shadow-sm">
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
                className="object-cover w-full h-full" />
            </div>

            <Button className={`w-full ${styles.button.primary}`}>
              協業提案する
            </Button>
          </div>
        </Card>
      ))}
    </div>)
  );
};

export default CompanyList;

