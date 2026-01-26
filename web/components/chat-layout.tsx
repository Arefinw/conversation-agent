'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, SendHorizontal, Menu, Plus, MessageSquare, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

// Mock data for conversations
const conversations = [
  { id: 1, title: 'New Chat', active: true },
  { id: 2, title: 'React Development Tips' },
  { id: 3, title: 'AI Assistant Discussion' },
  { id: 4, title: 'Project Planning' },
  { id: 5, title: 'Debugging Session' },
];

// Mock messages
const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    content: 'Hello! How can I assist you today?',
    timestamp: new Date(),
  },
];

export default function ChatLayout() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: 'user' as const,
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response after delay
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        role: 'assistant' as const,
        content: `I received your message: "${inputValue}". This is a simulated response from the AI assistant.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-64 lg:w-80 flex-col border-r bg-sidebar text-sidebar-foreground">
          <div className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-semibold">AI Assistant</span>
            </div>
          </div>
          
          <div className="flex p-2">
            <Button className="w-full gap-2">
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-1">
              <ul className="space-y-1">
                {conversations.map((conv) => (
                  <li key={conv.id}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${
                        conv.active 
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                          : 'hover:bg-sidebar-accent/50'
                      }`}
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span className="truncate">{conv.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="p-2 border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/user-avatar.png" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>User Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </aside>

        {/* Main Chat Area */}
        <div className="flex flex-1 flex-col">
          {/* Mobile Header */}
          <header className="md:hidden flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-semibold">AI Assistant</span>
            </div>
          </header>

          {/* Messages Area */}
          <ScrollArea className="flex-1 overflow-y-auto p-4 pb-20">
            <div className="max-w-3xl mx-auto w-full space-y-6">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
                      <AvatarImage src="/bot-avatar.png" alt="@bot" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">
                      {message.content}
                    </div>
                  </div>
                  
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
                      <AvatarImage src="/user-avatar.png" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
                    <AvatarImage src="/bot-avatar.png" alt="@bot" />
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-2xl rounded-bl-none px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-100"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="sticky bottom-0 bg-background border-t p-4">
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Message AI Assistant..."
                  className="flex-1 rounded-full border bg-background pr-12 py-5 px-4 shadow-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full h-10 w-10 bg-primary text-primary-foreground"
                >
                  <SendHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                AI Assistant can make mistakes. Consider checking important information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}