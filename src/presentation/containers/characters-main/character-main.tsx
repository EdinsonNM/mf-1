import React from "react";
import { useTranslation } from "react-i18next";
import CharacterList from "../characters-list/character-list";
import "./character-main.scss";

const CharacterMain = () => {
  const { t } = useTranslation();
  return (
    <div className="character-main">
      <h1 className="character-main__title">{t("title")}</h1>
      <h2 className="character-main__subtitle">{t("subtitle")}</h2>
      <CharacterList />
    </div>
  );
};

export default CharacterMain;
