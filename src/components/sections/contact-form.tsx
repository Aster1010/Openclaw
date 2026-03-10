"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function ContactForm() {
  return (
    <Card className="p-8">
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Name
          </label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-white/80">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="How can we help you?"
            className="min-h-[150px]"
          />
        </div>
        <Button className="w-full" size="lg">
          Send Message
        </Button>
      </form>
    </Card>
  );
}
