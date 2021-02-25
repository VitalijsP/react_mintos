export interface Currency {
  id: number;
  label: string;
  isSelected:boolean;
}

export const CURRENCIES: Currency[] = [
  { id: 0, label: 'EUR', isSelected: false },
  { id: 1, label: 'PLN', isSelected: false },
  { id: 2, label: 'GEL', isSelected: false },
  { id: 3, label: 'DKK', isSelected: false },
  { id: 4, label: 'CZK', isSelected: false },
  { id: 5, label: 'GBP', isSelected: false },
  { id: 6, label: 'SEK', isSelected: false },
  { id: 7, label: 'USD', isSelected: false },
  { id: 8, label: 'RUB', isSelected: false },
];
