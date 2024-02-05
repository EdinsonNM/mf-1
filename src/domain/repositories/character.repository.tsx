import { CharacterDto } from "../dtos/character.dto";
import { Character } from "../models/character.model";
import { Observable } from "rxjs";

abstract class CharacterRepository {
  abstract getAll(): Observable<CharacterDto[]>;
}
export { CharacterRepository };
