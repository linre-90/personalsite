import { ContentSelector } from "./enums";

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
  readContent: ContentSelector;
}

export interface ChildrenProps {
  children?:
    | typeof Children
    | (typeof Children)[]
    | ReactElement
    | ReactElement[]
    | ReactFragment
    | undefined;
}

export interface PageBaseProps extends ChildrenProps {
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

export interface ViewpfProps extends ChildrenProps {
  content: ContentSelector;
}

/** Page component types ***************************************************************/
export interface HomePageProps extends VideoComponentProps {}

export interface PortfolioPageProps extends VideoComponentProps {}
