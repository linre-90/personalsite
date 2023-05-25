/** Component types ***************************************************************/
export interface VideoComponentProps {
  videoCookiesOk?: boolean | false;
  videoURL?: string;
  acceptFunction?: Function;
}

export interface PortfolioItemProps extends VideoComponentProps {
  headline: string;
  description: string;
  usedtech: string[];
  imageCollection?: JSX.Element[];
  link?: string;
  downloadLink?: string;
}

export interface PageBaseProps {
  children?:
    | typeof Children
    | (typeof Children)[]
    | ReactElement
    | ReactElement[]
    | ReactFragment
    | undefined;
  renderContact?: boolean;
}

export interface NavProps {
  address: string;
  id: string;
}

export interface ImageProps {
  img: string;
  alt: string;
}

/** Page component types ***************************************************************/
export interface HomePageProps extends VideoComponentProps {}

export interface PortfolioPageProps extends VideoComponentProps {}
