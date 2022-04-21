import * as React from "react";

export enum SEMANTICS {
  Abbreviation = "Abbr",
  Address = "Address",
  Article = "Article",
  Aside = "Aside",
  Figure = "Figure",
  Section = "Section"
}

export const Semantic = {
  /**
   * Represents an abbreviation or acronym; the title attribute
   * can provide an expansion or description for the abbreviation.
   * The title must contain this full description and nothing else.
   */
  [SEMANTICS.Abbreviation]: ({
    title,
    children,
    style
  }: {
    title: string;
    children: string;
    style?: React.CSSProperties;
  }) => {
    return (
      <abbr title={title} style={style}>
        {children}
      </abbr>
    );
  },
  /**
   * Indicates that the enclosed HTML provides contact information
   * for a person or people, or for an organization.
   */
  [SEMANTICS.Address]: ({
    children,
    style
  }: {
    children: React.ReactChild | React.ReactChild[];
    style?: React.CSSProperties;
  }) => <address style={style}>{children}</address>,
  /**
   * represents a self-contained composition in a document, page,
   * application, or site, which is intended to be independently
   * distributable or reusable (e.g., in syndication).
   */
  [SEMANTICS.Article]: ({
    children,
    heading
  }: {
    children: React.ReactChild | React.ReactChild[];
    heading: {
      props: any;
      children: React.ReactChild;
      Comp: React.FunctionComponent<any>;
    };
  }) => (
    <article>
      <heading.Comp {...heading.props}>{heading.children}</heading.Comp>{" "}
      {children}
    </article>
  ),
  /**
   * Represents a portion of a document whose content is only
   * indirectly related to the document's main content.
   * Asides are frequently presented as sidebars or call-out boxes.
   */
  [SEMANTICS.Aside]: ({
    children,
    role
  }: {
    children: React.ReactChild | React.ReactChild[];
    role: "feed" | "none" | "note" | "presentation" | "region" | "search";
  }) => <aside role={role}>{children}</aside>
};
