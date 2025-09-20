import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Share2, Star, ArrowRight, Zap, Users, Target, Globe } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

// Added SEO metadata for homepage
export const metadata: Metadata = {
  title: "Imprintly - Rank #1 in Chinese LLM Models | 中文AI搜索排名优化",
  description:
    "Specialized platform to help brands achieve #1 ranking in Chinese LLM models like Baidu ERNIE, Alibaba Qwen, and Tencent Hunyuan. Transform English content for Chinese AI dominance.",
  keywords:
    "Chinese LLM ranking, Baidu ERNIE optimization, Alibaba Qwen ranking, Tencent Hunyuan, Chinese AI search, 中文AI优化, 百度文心一言排名",
  openGraph: {
    title: "Imprintly - Rank #1 in Chinese LLM Models",
    description:
      "Specialized platform to help brands achieve #1 ranking in Chinese LLM models like Baidu ERNIE, Alibaba Qwen, and Tencent Hunyuan.",
    type: "website",
    url: "https://imprintly.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imprintly - Chinese LLM Ranking Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imprintly - Rank #1 in Chinese LLM Models",
    description:
      "Specialized platform to help brands achieve #1 ranking in Chinese LLM models like Baidu ERNIE, Alibaba Qwen, and Tencent Hunyuan.",
    images: ["/og-image.jpg"],
  },
}

export default function Homepage() {
  const benefits = [
    {
      icon: Brain,
      title: "Chinese LLM Ranking Optimization",
      description:
        "Specialized algorithms designed to achieve #1 rankings in Baidu ERNIE, Alibaba Qwen, Tencent Hunyuan, and other major Chinese AI models. Our system understands Chinese language patterns and cultural context.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Zap,
      title: "English-to-Chinese Content Transformation",
      description:
        "Transform your existing English content assets into Chinese LLM-optimized formats. Maintain brand consistency while adapting to Chinese language nuances and cultural preferences.",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      icon: Share2,
      title: "Chinese Language Writing Optimization",
      description:
        "Advanced Chinese language processing that optimizes content structure, tone, and cultural references specifically for Chinese AI models. Ensure maximum visibility and engagement.",
      color: "text-green-600 bg-green-100",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Analyze English Content",
      description: "Our AI analyzes your existing English content assets and identifies key concepts that will resonate in Chinese markets and AI models",
    },
    {
      number: "02",
      title: "Transform for Chinese LLMs",
      description: "Advanced Chinese language processing transforms your content specifically for Baidu ERNIE, Alibaba Qwen, and other Chinese AI models",
    },
    {
      number: "03",
      title: "Achieve #1 Rankings",
      description:
        "Deploy optimized Chinese content and track your rankings across all major Chinese LLM models. Most brands achieve top 3 rankings within 30 days",
    },
  ]

  const testimonials = [
    {
      quote:
        "We achieved #1 ranking in Baidu ERNIE within 3 weeks! Our brand visibility in Chinese AI search increased by 450%. Imprintly's understanding of Chinese LLM algorithms is unmatched.",
      author: "李明 (Li Ming)",
      title: "Global Marketing Director at TechGlobal Inc.",
      rating: 5,
    },
    {
      quote:
        "Finally, a platform that truly understands Chinese AI models. We're now ranking in the top 3 for all our key terms in Alibaba Qwen and Tencent Hunyuan. Game-changing results.",
      author: "Sarah Chen",
      title: "Head of China Market Entry at InnovateGlobal",
      rating: 5,
    },
    {
      quote:
        "Our English product descriptions were perfectly transformed for Chinese LLMs. We went from invisible to #1 rankings in Chinese AI search. The ROI has been incredible.",
      author: "王小雨 (Wang Xiaoyu)",
      title: "Digital Marketing Lead at CrossBorder Solutions",
      rating: 5,
    },
  ]

  const trustIndicators = [
    {
      title: "Brands Ranking #1",
      value: "850+",
      description: "Global brands achieving top rankings in Chinese LLMs",
      icon: Users,
    },
    {
      title: "Chinese LLM Models",
      value: "8+",
      description: "Optimized for Baidu, Alibaba, Tencent, and more",
      icon: Target,
    },
    {
      title: "Ranking Success Rate",
      value: "94%",
      description: "Brands achieve top 3 rankings within 30 days",
      icon: Globe,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <div className="mb-2">
              Rank{" "}
              <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                #1 in Chinese LLM Models
              </span>
            </div>
            <div className="text-3xl sm:text-5xl lg:text-6xl">
              在中文AI模型中排名第一
            </div>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            <strong>Specialized platform for Chinese LLM dominance.</strong> We help brands achieve top rankings in
            Baidu ERNIE (文心一言), Alibaba Qwen (通义千问), Tencent Hunyuan (混元), and other Chinese AI models.
            Transform your English content assets into Chinese LLM-optimized content that ranks first.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              <Link href="/dashboard">Rank #1 in Chinese AI</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent border-red-600 text-red-600 hover:bg-red-50">
              See Chinese LLM Results
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dominating Chinese LLM Rankings
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Global brands achieving #1 rankings in Chinese AI models
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <indicator.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{indicator.value}</div>
                  <p className="text-sm text-gray-600 mt-1">{indicator.title}</p>
                  <p className="text-xs text-gray-500 mt-2">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dominate Chinese LLM Search Results
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized tools to achieve #1 rankings in Chinese AI models and transform English content for Chinese markets
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to Rank #1 in Chinese LLMs</h2>
            <p className="mt-4 text-lg text-gray-600">Three proven steps to dominate Chinese AI search results</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 hidden lg:block w-full h-0.5 bg-gray-200 transform translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Chinese LLM Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Real results from brands achieving #1 rankings in Chinese AI models
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-900 mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Rank #1 in Chinese LLM Models?
          </h2>
          <p className="mt-4 text-xl text-red-100">
            Join 850+ global brands already dominating Chinese AI search with specialized LLM optimization.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            <Link href="/dashboard">Achieve #1 Chinese LLM Rankings</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
