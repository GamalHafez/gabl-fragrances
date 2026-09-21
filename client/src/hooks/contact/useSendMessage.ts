import { useMutation } from "@tanstack/react-query";
import { contactService } from "@/services/contact/contact.service";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: contactService.sendMessage,
  });
};
