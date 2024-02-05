import { Observable } from "rxjs";
import { Character } from "../../domain/models/character.model";
import { CharacterRepository } from "../../domain/repositories/character.repository";

export class CharacterServiceRepository extends CharacterRepository {
  getAll(): Observable<Character[]> {
    throw new Error("Method not implemented.");
  }
}
