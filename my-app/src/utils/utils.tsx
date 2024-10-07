import {ReviewType} from "../types/types.tsx";

export function shiftArrayToValue(arr: ReviewType[], value: number): ReviewType[] {
  while (arr[0].order !== value) {
    const firstShifted = arr.shift();
    arr.push(firstShifted as ReviewType);
  }
  return arr;
}

export function validateNameInput(value: string): string {
  if (/[^ a-zA-Zа-яА-ЯёЁ]/.test(value.trim())) {
    return 'Поле может содержать только буквы'
  }
  return ''
}


export function validatePhoneInput(value: string): string {
  if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(value.trim()) && value !== '') {
    return 'Неверный номер'
  }
  if (value.trim().length < 11 && value !== '') {
    return 'Неверная длина номера'
  }
  return ''
}
