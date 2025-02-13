'use client';

import { Header } from '@/components/header';
import { AppleCardsCarouselDemo } from '@/components/ui/AppleCardsCarouselDemo';

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <AppleCardsCarouselDemo/>
      
      {/* Contact CTA */}
      <section className="py-10 bg-black-800 text-center">
        <h2 className="text-xl font-bold mb-2">Let’s Build Something Amazing Together</h2>
        <p className="text-md max-w-2xl mx-auto mb-4 text-gray-400">
          Ready to take your web presence to the next level? Contact us today to discuss your project!
        </p>
      </section>
    </main>
  );
}
