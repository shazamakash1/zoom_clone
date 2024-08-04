"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const router = useRouter();

  const isMeetingOnwer =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call?.state.createdBy.id;

  if (!isMeetingOnwer) return null;

  return (
    <Button
      onClick={async () => {
        await call.endCall();
        router.push("/");
      }}
      className="bg-red-500"
    >
      End Call for All
    </Button>
  );
};

export default EndCallButton;
