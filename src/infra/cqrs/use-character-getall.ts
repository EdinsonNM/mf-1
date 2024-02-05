import { firstValueFrom } from "rxjs";
import { useQuery } from "@tanstack/react-query";
import { characterGetAllUseCase } from "../factory/character.factory";
import { Character } from "../../domain/models/character.model";
export function useCharacterQuery(useCase = characterGetAllUseCase) {
  return useQuery({
    queryKey: ["marvel-characters"],
    queryFn: () => firstValueFrom(useCase.execute()),
  });
}
/*
 */
