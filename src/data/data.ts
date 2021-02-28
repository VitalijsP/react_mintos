export interface Currency {
  label: string;
  isSelected: boolean;
}

export const CURRENCIES: Currency[] = [
  { label: 'EUR', isSelected: false },
  { label: 'PLN', isSelected: false },
  { label: 'GEL', isSelected: false },
  { label: 'DKK', isSelected: false },
  { label: 'CZK', isSelected: false },
  { label: 'GBP', isSelected: false },
  { label: 'SEK', isSelected: false },
  { label: 'USD', isSelected: false },
  { label: 'RUB', isSelected: false },
];
