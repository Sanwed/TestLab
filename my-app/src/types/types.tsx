export interface AboutCardType {
  imageSrc: string;
  title: string;
  description: string;
}

export interface ReviewType {
  id: number,
  imageSrc: string;
  name: string,
  city: string,
  description: string,
  order?: number
}

export interface FaqCardType {
  id: number,
  title: string
  description: string,
  isHidden: boolean
  order?: number
}

export interface SurveyCardType {
  id: number,
  title: string,
  description: string,
}
