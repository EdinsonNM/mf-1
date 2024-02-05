import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Character } from "../../../domain/models/character.model";
import { useTranslation } from "react-i18next";

export default function CharacterCard(props: { character: Character }) {
  const { character } = props;
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="380"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{t("realName")}:</strong>
            {character.realname}
          </Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            <strong>{t("specie")}:</strong>
            {character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{t("dateOfBirth")}:</strong>
            {character.dateofbirth}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{t("affiliation")}:</strong>
            {character.affiliation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
