import ChatbotSupportSection from "@/app/components/live-chat/ChatbotSupportSection";
import CustomerEngagement from "@/app/components/live-chat/CustomerEngagement";
import LiveChat from "@/app/components/live-chat/LiveChat";
import React from "react";

const LiveChats = () => {
  return (
    <>
      <LiveChat />
      <CustomerEngagement />
      <ChatbotSupportSection />
    </>
  );
};

export default LiveChats;
