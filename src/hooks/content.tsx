import React, { useEffect, useState, ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { ContentSelector } from "../enums";

/** MD file imports */
import catsopinion from "../markdown/catsopinion.md";
import catquiz from "../markdown/catquiz.md";
import catvision from "../markdown/catvision.md";
import virtualLibrary from "../markdown/library.md";
import footkin from "../markdown/footkin.md";
import raytrace from "../markdown/raytracing.md";

const contentList = [
  catsopinion,
  catquiz,
  catvision,
  footkin,
  virtualLibrary,
  raytrace,
];

/**
 * Custom hook for converting content markdown file to React element.
 */
const useContent = (contentPath: ContentSelector): ReactElement | null => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(contentList[contentPath])
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, [contentPath]);
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export { useContent, ContentSelector };
