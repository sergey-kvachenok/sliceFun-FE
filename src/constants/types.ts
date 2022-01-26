export interface IBaseShow {
    id: string,
    verified: boolean,
    title: string,
    category: string[],
    description: string,
    image: string,
    mainImage: string,
}

export interface IPopularShow extends IBaseShow {
source: string
}

export interface ILibraryShow extends IBaseShow {
  source: string,
date: string
}

export type ColumnType = {
  label: string
}

export type Row = {
  [name: string]: React.ReactElement
}

export type TabType = {
  slug?: string,
  label: string
}

export type HeadlineType = {
  title: string,
  description: string,
  image: string
}