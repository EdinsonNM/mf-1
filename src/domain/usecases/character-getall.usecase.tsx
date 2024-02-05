import { Observable, map } from "rxjs";
import { UseCase } from "../../core/interfaces/use-case";
import { Character } from "../models/character.model";
import { CharacterRepository } from "../repositories/character.repository";
import { CharacterMapper } from "../mappers/character.mapper";

class CharacterGetAllUseCase implements UseCase<void, Character[]> {
  mapper = new CharacterMapper();

  constructor(private readonly repository: CharacterRepository) {}
  execute(): Observable<Character[]> {
    return this.repository.getAll().pipe(map(this.mapper.mapListFrom));
  }
}
export default CharacterGetAllUseCase;
