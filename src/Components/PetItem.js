import petsStore from "../PetStore/PetStore";

export default function PetItem({ pet, petsStore }) {
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petsStore.Adopt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
