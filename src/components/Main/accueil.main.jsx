import React, { useState } from "react";
import {
  Coordonnees,
  InfoForMe,
  PourquoiChoisir,
  Technologies,
} from "../Section";
import { LinkStyle, separator as Separator } from "../Outils/style.outil";
import pub from "../../videos/pub.MP4";

const AccueilMain = () => {
  const [component, setComponent] = useState({
    coordonnees: false,
    pourquoirChoisir: false,
    technologies: false,
    infoForMe: true,
  });

  const ListLink = () => {
    return (
      <div className="d-flex flex-column mx-2">
        <LinkStyle
          className="my-2 p-2 border rounded"
          onClick={() => {
            setComponent({
              coordonnees: false,
              pourquoirChoisir: false,
              technologies: false,
              infoForMe: true,
            });
          }}
        >
          <i>#Qui suis-je?</i>
        </LinkStyle>
        <LinkStyle
          className="my-2 p-2 border rounded"
          onClick={() => {
            setComponent({
              coordonnees: false,
              pourquoirChoisir: true,
              technologies: false,
              infoForMe: false,
            });
          }}
        >
          <i>#Pourquoi choisir mes services</i>
        </LinkStyle>
        <LinkStyle
          className="my-2 p-2 border rounded"
          onClick={() => {
            setComponent({
              coordonnees: false,
              pourquoirChoisir: false,
              technologies: true,
              infoForMe: false,
            });
          }}
        >
          <i>#Technologies</i>
        </LinkStyle>
        <LinkStyle
          className="my-2 p-2 border rounded"
          onClick={() => {
            setComponent({
              coordonnees: true,
              pourquoirChoisir: false,
              technologies: false,
              infoForMe: false,
            });
          }}
        >
          <i>#Mes coordonnées</i>
        </LinkStyle>
      </div>
    );
  };

  return (
    <main className="d-lg-flex flex-row gap-1 justify-content-start p-2 main">
      <div className="border sidebar sticky col-sm-4 col-lg-3 bottom-0 w-absolute border-2 border-black opacity-75 d-flex flex-column text-white align-items-center mx-auto p-1 rounded bg-noir">
        <Separator width={"70%"} color={"white"} />
        <i className="fs-5">Sections</i>
        <Separator width={"70%"} color={"white"} />
        <ListLink />
        <Separator width={"70%"} color={"white"} />
        <i className="fs-5">Pub</i>
        <Separator width={"70%"} color={"white"} />
        <video width={"70%"} className="m-0 p-0" height={"25%"}>
          <source className="rounded" src={pub} type="video/mp4" />
        </video>
      </div>
      {component.coordonnees && <Coordonnees />}
      {component.pourquoirChoisir && <PourquoiChoisir />}
      {component.technologies && <Technologies />}
      {component.infoForMe && <InfoForMe />}
    </main>
  );
};

export { AccueilMain };
