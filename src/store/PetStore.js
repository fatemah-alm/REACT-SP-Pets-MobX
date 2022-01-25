import { makeAutoObservable, observable } from "mobx";
import petsData from "../petsData";

class PetStore {
  pets = petsData;

  constructor() {
    makeAutoObservable(this);
  }

  Adopt = (id) => {
    this.pets = this.pets.filter((pet) => pet.id !== id);
  };
}

const petsStore = new PetStore();

export default petsStore;
