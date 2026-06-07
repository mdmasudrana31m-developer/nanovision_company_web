import type { Metadata } from "next";
import ChatbotSupportSection from "@/app/components/live-chat/ChatbotSupportSection";
import CustomerEngagement from "@/app/components/live-chat/CustomerEngagement";
import LiveChat from "@/app/components/live-chat/LiveChat";
import LiveChatSection from "@/app/components/live-chat/LiveChatSection";
import TicketingSystem from "@/app/components/live-chat/TicketingSystem";
import WhatsAppCampaignSection from "@/app/components/live-chat/WhatsAppCampaignSection";
import React from "react";

export const metadata: Metadata = {
  title: "Live Chat | Nanovision LTD",
  description:
    "Nanovision Live Chat solutions: chatbots, ticketing, and WhatsApp campaigns to improve customer engagement.",
  openGraph: { images: ["/og-image.jpg"] },
};

const LiveChats = () => {
  return (
    <>
      <LiveChat />
      <CustomerEngagement />
      <ChatbotSupportSection />
      <LiveChatSection />

      <WhatsAppCampaignSection />
      <TicketingSystem />
    </>
  );
};

export default LiveChats;
