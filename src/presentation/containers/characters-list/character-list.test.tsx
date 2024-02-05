import React from "react";
import CharacterList from "./character-list";
import { render } from "@testing-library/react";
import { useCharacterQuery } from "../../../infra/cqrs/use-character-getall";
jest.mock("../../../infra/cqrs/use-character-getall", () => ({
  useCharacterQuery: jest.fn(),
}));
describe("CharacterList", () => {
  // Renders a grid container with spacing of 4 and center alignment
  it("should render in the document", () => {
    useCharacterQuery.mockReturnValue({ data: [], isLoading: false });
    const { getByTestId } = render(<CharacterList />);
    const gridContainer = getByTestId("character-list");
    expect(gridContainer).toBeInTheDocument();
  });

  // Renders a character card for each character in the data array
  it("should render a character card for each character in the data array", () => {
    const characters = [
      { name: "Character 1" },
      { name: "Character 2" },
      { name: "Character 3" },
    ];
    useCharacterQuery.mockReturnValue({ data: characters, isLoading: false });
    const { getByText } = render(<CharacterList />);
    characters.forEach((character) => {
      const characterCard = getByText(character.name);
      expect(characterCard).toBeInTheDocument();
    });
  });

  it("should display the character's image, name, real name, species, date of birth, and affiliation in each character card", () => {
    const characters = [
      {
        name: "Character 1",
        image: "image1.jpg",
        realname: "Real Name 1",
        species: "Species 1",
        dateofbirth: "01/01/2000",
        affiliation: "Affiliation 1",
      },
      {
        name: "Character 2",
        image: "image2.jpg",
        realname: "Real Name 2",
        species: "Species 2",
        dateofbirth: "02/02/2000",
        affiliation: "Affiliation 2",
      },
    ];
    useCharacterQuery.mockReturnValue({ data: characters, isLoading: false });
    const { getByText, getByAltText } = render(<CharacterList />);
    characters.forEach((character) => {
      const characterCard = getByText(character.name);
      expect(characterCard).toBeInTheDocument();
      expect(getByAltText(character.name)).toHaveAttribute(
        "src",
        character.image
      );
      expect(getByText(character.realname)).toBeInTheDocument();
      expect(getByText(character.species)).toBeInTheDocument();
      expect(getByText(character.dateofbirth)).toBeInTheDocument();
      expect(getByText(character.affiliation)).toBeInTheDocument();
    });
  });

  // Renders an empty grid container when data is an empty array
  it("should render an empty grid container when data is an empty array", () => {
    useCharacterQuery.mockReturnValue({ data: [], isLoading: false });
    const { getByTestId } = render(<CharacterList />);
    const gridContainer = getByTestId("character-list");
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toBeEmptyDOMElement();
  });

  // Displays an error state when there is an error fetching data
  it("should display an error state when there is an error fetching data", () => {
    useCharacterQuery.mockReturnValue({
      error: new Error("Error fetching data"),
      isLoading: false,
    });
    const { getByText } = render(<CharacterList />);
    const errorState = getByText("Error fetching data");
    expect(errorState).toBeInTheDocument();
  });

  // Displays a loading state when data is undefined
  it("should display a loading state when data is undefined", () => {
    useCharacterQuery.mockReturnValue({ isLoading: true });
    const { getByText } = render(<CharacterList />);
    const loadingState = getByText("Loading...");
    expect(loadingState).toBeInTheDocument();
  });
});
