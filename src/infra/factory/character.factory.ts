import CharacterGetAllUseCase from "../../domain/usecases/character-getall.usecase";
import { CharacterMockRepository } from "../repositories/character-mock.repository";

export const characterGetAllUseCase = new CharacterGetAllUseCase(
  new CharacterMockRepository()
);
