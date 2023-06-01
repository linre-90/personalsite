import { ContentSelector } from "./enums";

/** Component types ***************************************************************/
export interface VideoComponentProps {
  videoURL?: string;
}

export interface PortfolioItemProps {
  headline: string;
  description: string;
  usedtech: string[];
  thumbnailImage: JSX.Element;
  containsVideoContent: boolean;
  //imageCollection?: JSX.Element[];
  //link?: string;
  //downloadLink?: string;
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
  containsVideoContent: boolean;
}

export interface CookieNoticeProps extends ChildrenProps {}

export interface PostProps extends ChildrenProps {}
