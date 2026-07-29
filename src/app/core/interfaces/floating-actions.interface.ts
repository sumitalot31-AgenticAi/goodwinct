export interface WhatsappAction {
  enabled: boolean;
  phone: string;
  message: string;
  icon: string;
}

export interface FloatingActions {
  whatsapp: WhatsappAction;
}