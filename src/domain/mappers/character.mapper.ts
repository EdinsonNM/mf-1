import { CharacterDto } from "../dtos/character.dto";
import { Character } from "../models/character.model";
import { Serializable } from "ts-serializable";
import { plainToClass } from "class-transformer";

export class CharacterMapper {
  mapListFrom(list: CharacterDto[]): Character[] {
    const data = list.map((item) => {
      return plainToClass(Character, item);
    });
    return data;
  }
}
