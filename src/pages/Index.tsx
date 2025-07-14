import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Современные подходы к React разработке",
      excerpt: "Изучаем новейшие паттерны и лучшие практики в React 18",
      date: "14 июля 2024",
      readTime: "7 мин",
      tags: ["React", "JavaScript", "Hooks"]
    },
    {
      id: 2,
      title: "CSS Grid против Flexbox: когда использовать что",
      excerpt: "Подробный разбор двух мощных инструментов для создания макетов",
      date: "12 июля 2024",
      readTime: "5 мин",
      tags: ["CSS", "Layout", "Design"]
    },
    {
      id: 3,
      title: "TypeScript в 2024: новые возможности",
      excerpt: "Обзор последних обновлений и фич TypeScript для фронтенд разработки",
      date: "10 июля 2024",
      readTime: "8 мин",
      tags: ["TypeScript", "JavaScript", "Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">Frontend Blog</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">О себе</a>
              <a href="#blog" className="text-gray-600 hover:text-black transition-colors">Блог</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Думай как
            <br />
            <span className="text-blue-600">разработчик</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Делюсь опытом фронтенд разработки, современными подходами и лучшими практиками создания веб-приложений
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
            Читать статьи
          </Button>
        </div>
      </section>

      {/* Blog Posts */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Последние статьи</h2>
            <p className="text-xl text-gray-600">Новые идеи и подходы в мире фронтенд разработки</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-black hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">О себе</h2>
              <p className="text-xl text-gray-600">Фронтенд разработчик с опытом создания современных веб-приложений</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-80 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <img 
                    src="/img/a2e303d5-0c40-4ea3-a86a-f74f86664c65.jpg" 
                    alt="Frontend Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Привет! Я фронтенд разработчик</h3>
                <p className="text-gray-600 mb-6">
                  Специализируюсь на создании современных веб-приложений с использованием React, TypeScript и современных CSS-фреймворков. 
                  Люблю делиться знаниями и помогать другим разработчикам расти профессионально.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Code" size={20} className="text-blue-600" />
                    <span className="text-gray-600">React & TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Palette" size={20} className="text-blue-600" />
                    <span className="text-gray-600">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={20} className="text-blue-600" />
                    <span className="text-gray-600">Performance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Globe" size={20} className="text-blue-600" />
                    <span className="text-gray-600">Web Standards</span>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Связаться со мной
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-xl text-gray-300 mb-8">Готов обсудить проекты и поделиться опытом</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Написать сообщение
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-black mb-4 md:mb-0">Frontend Blog</div>
            <div className="text-gray-600 text-center md:text-right">
              <p>© 2024 Frontend Blog. Все права защищены.</p>
              <p className="mt-2">Сделано с ❤️ для сообщества разработчиков</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;