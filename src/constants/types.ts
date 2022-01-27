export type ColumnType = {
  label: string;
};

export type Row = {
  [name: string]: React.ReactElement;
};

export type TabType = {
  slug?: string;
  label: string;
  clickHandler: Function;
};

export type HeadlineType = {
  title: string;
  description: string;
  image: string;
};
