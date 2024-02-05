import { Observable, of } from "rxjs";
import { Character } from "../../domain/models/character.model";
import { CharacterRepository } from "../../domain/repositories/character.repository";
import { charactersData } from "../../assets/data/marvel";
import { CharacterDto } from "../../domain/dtos/character.dto";

export class CharacterMockRepository extends CharacterRepository {
  getAll(): Observable<CharacterDto[]> {
    return of(charactersData);
  }
}
