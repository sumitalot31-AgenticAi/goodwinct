export interface PopupButton {
  text: string;
  route: string;
}

export interface Popup {
  enabled: boolean;
  showOnce: boolean;

  title: string;
  subtitle: string;
  description: string;

  image: string;

  primaryButton: PopupButton;
  secondaryButton: PopupButton;
}